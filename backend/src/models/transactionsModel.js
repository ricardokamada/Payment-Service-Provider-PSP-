const Sequelize = require('sequelize');
const database = require('../db');

const transactionsModel = database.define('transactions', {
    
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
        field: 'createdAt',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updatedAt',
        type: Sequelize.DATE,
    }
    

})

module.exports = transactionsModel;