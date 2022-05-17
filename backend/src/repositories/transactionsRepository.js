const transactionsModel = require('../models/transactionsModel');

function getTransaction(){    
    return transactionsModel.findAll({where: {}});
}

async function insertTransactions(newTransaction){  
    
    await transactionsModel.create(newTransaction)
    


}

module.exports = {
    getTransaction,
    insertTransactions
}