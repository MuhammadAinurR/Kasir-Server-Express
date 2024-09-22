"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            Payment.belongsTo(models.Order, { foreignKey: "order_id" });
        }
    }
    Payment.init(
        {
            order_id: DataTypes.INTEGER,
            payment_date: DataTypes.DATE,
            amount: DataTypes.DECIMAL,
            payment_method: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Payment",
        }
    );
    return Payment;
};
