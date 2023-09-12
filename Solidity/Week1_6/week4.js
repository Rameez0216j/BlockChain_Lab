const {Web3} = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Ganache default URL

async function sendEther() {
    try {
        const accounts = await web3.eth.getAccounts();
        const sender = accounts[0];
        const receiver = accounts[1];
        const amountToSend = web3.utils.toWei('1', 'ether'); // Convert 1 Ether to Wei

        const tx = {
            from: sender,
            to: receiver,
            value: amountToSend
        };

        const transactionHash = await web3.eth.sendTransaction(tx);
        console.log(`Transaction successful. Transaction hash: ${transactionHash}`);
    } catch (error) {
        console.error(`Error sending transaction: ${error}`);
    }
}

sendEther();
