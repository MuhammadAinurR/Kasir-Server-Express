"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Outlet extends Model {
        static associate(models) {
            Outlet.belongsTo(models.Company, { foreignKey: "company_id" });
            Outlet.hasMany(models.Order, { foreignKey: "outlet_id" });
        }
    }
    Outlet.init(
        {
            company_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone_number: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Outlet",
        }
    );
    return Outlet;
};
