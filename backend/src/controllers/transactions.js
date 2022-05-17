const transactionsRepository = require('../repositories/transactionsRepository');

async function getTransactions(req, res, next) {
    const transaction = await transactionsRepository.getTransaction();
    return res.json(transaction)
}

function newTransactions(req, res, next) {
    let myJson = {        
        transaction_amount : '22',
        description : 'Cadeira Plana',
        payment_method : '1',
        card_number : '558445558', 
        card_holder_name : 'JULIO DOS SANTOS KAMADA',
        card_expiration_date : '0',
        card_cvv : '0',
        createdAt : '0',
        updatedAt : '0'
    }

    transactionsRepository.insertTransactions(myJson);
    res.sendStatus(200);
}


module.exports = {
    getTransactions,
    newTransactions
}