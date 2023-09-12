const { Web3 } = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");

// Private key of the sender's Ethereum account
const senderPrivateKey =
    "0x28c5f4f67ed61e5ef7c6c712b9e6b62deb94dd5f3684b27b81e9d3883a04206f";
// Sender's Ethereum address
const senderAddress = "0xD2D473Ac80Df9c59B7F8817920Ee8D06e1a6f581";

// Recipient's Ethereum address
const recipientAddress = "0x0474c3D5241D703f573F764A0Ee94A335e582e01";
// Replace with the recipient"s Ethereum address
// Transfer Ether function
async function transferEther() {
    // Get the current gas price
    const gasPrice = await web3.eth.getGasPrice();
    // Estimate the gas required for the transaction
    const gasEstimate = await web3.eth.estimateGas({
        from: senderAddress,
        to: recipientAddress,
        value: web3.utils.toWei("0.1", "ether"), // Amount of Ether to send (in this example, 0.1 Ether)
    });
    // Create the raw transaction object
    const rawTx = {
        from: senderAddress,
        to: recipientAddress,
        value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")), // Amount of
        // Ether to send, converted to Wei
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gasEstimate),
    };
    // Sign the transaction with the sender"s private key
    const signedTx = await web3.eth.accounts.signTransaction(
        rawTx,
        senderPrivateKey
    );
    // Send the signed transaction to the Ethereum network
    const txReceipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    console.log(
        "Transaction successful. Transaction hash:",
        txReceipt.transactionHash
    );
}

// Call the transferEther function to initiate the transaction
transferEther();
