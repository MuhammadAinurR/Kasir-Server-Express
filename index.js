const { Product, Payment, Order, OrderItem } = require("./models");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", mainController.test);

app.post("/order", async (req, res) => {
    const { outlet_id, items } = req.body;

    try {
        // Create a new order
        const order = await Order.create({
            outlet_id,
            order_date: new Date(),
            total_amount: 0,
        });

        // Create order items and calculate total amount
        let totalAmount = 0;
        for (const item of items) {
            const { product_id, quantity } = item;

            // Fetch product details from the database
            const product = await Product.findByPk(product_id);
            if (!product) {
                return res.status(404).send({ message: "Product not found" });
            }

            const price = product.price;
            await OrderItem.create({
                order_id: order.id,
                product_id,
                quantity,
                price,
            });
            totalAmount += quantity * price;
        }

        // Update the total amount in the order
        order.total_amount = totalAmount;
        await order.save();

        // Process payment (for simplicity, assume payment is always successful)
        await Payment.create({
            order_id: order.id,
            payment_date: new Date(),
            amount: totalAmount,
            payment_method: "cash",
        });

        res.status(201).send({
            message: "Order created successfully",
            orderId: order.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error creating order", error });
    }
});
app.listen(port, () => console.log(`service is running on port ${port}`));
