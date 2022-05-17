'use strict';
require('dotenv').config();
const crypto = require('../src/utils/crypto');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transactionsId = await queryInterface.rawSelect('transactions', { where: {}, limit: 1 }, ['id']);
    if (!transactionsId) {
      return queryInterface.bulkInsert('transactions', [{
        id: '1',
        transaction_amount: '450.00',
        description: 'Bicicleta caloi aro 20',
        payment_method: true,
        card_number: crypto.encrypt('123456'),
        card_holder_name: 'JOSE DA SILVA',
        card_expiration_date: new Date(),
        card_cvv: '125',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});

  }
};
