'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define('customer', {
    money: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return customer;
};