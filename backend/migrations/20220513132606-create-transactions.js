'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', {
      
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

      },
      transaction_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      payment_method: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      card_number: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      card_holder_name: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      card_expiration_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      card_cvv: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {

        type: Sequelize.DATE
    }

    })
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transactions');
  }
};