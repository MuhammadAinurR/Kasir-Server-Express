"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.Outlet, { foreignKey: "outlet_id" });
            Order.hasMany(models.OrderItem, { foreignKey: "order_id" });
            Order.hasMany(models.Payment, { foreignKey: "order_id" });
        }
    }
    Order.init(
        {
            outlet_id: DataTypes.INTEGER,
            order_date: DataTypes.DATE,
            total_amount: DataTypes.DECIMAL,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
