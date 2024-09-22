"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Company, { foreignKey: "company_id" });
            Product.hasMany(models.OrderItem, { foreignKey: "product_id" });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            price: DataTypes.DECIMAL,
            company_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
