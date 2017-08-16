'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("items",[
      {
        description: "Doritos",
        costInCents: 35,
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: "Oreos",
        costInCents: 125,
        quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("items", null, {});
  }
};
