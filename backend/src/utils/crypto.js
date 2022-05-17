const aes = require('aes-js');

const key = aes.utils.utf8.toBytes(process.env.AES_KEY);
if(key.length !== 32) throw new Error('Invalid key for AES. Must be 256 bit / 32 bytes');

function encrypt(text){
    const bytesInfo = aes.utils.utf8.toBytes(text);
    const aesCTR = new aes.ModeOfOperation.ctr(key);
    const encryptedBytes = aesCTR.encrypt(bytesInfo);
    const encryptedHex = aes.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}

function decrypt(encryptedHex){
    const encryptedBytes = aes.utils.hex.toBytes(encryptedHex);
    const aesCtr = new aes.ModeOfOperation.ctr(key);
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aes.utils.utf8.fromBytes(decryptedBytes);
}

module.exports = {
    encrypt,
    decrypt
}