"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        static associate(models) {
            Company.hasMany(models.Outlet, { foreignKey: "company_id" });
            Company.hasMany(models.Product, { foreignKey: "company_id" });
        }
    }
    Company.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone_number: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Company",
        }
    );
    return Company;
};
