"use strict";
const seedData = require("../seed-data.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Products",
            seedData.products.map((e) => ({
                ...e,
                createdAt: new Date(),
                updatedAt: new Date(),
            })),
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Products", null, {});
    },
};
