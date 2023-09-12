const { Web3 } = require("web3");

const infuraEndpoint =
    "https://mainnet.infura.io/v3/fd06bb9b23ac4f83be4afe65b79a8cf0";
const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));

// Private key of the sender's Ethereum account
const senderPrivateKey =
    "4e3ebccc0488b8dc570784997434952e7d009e91c7e5878ba92ee2398ec535eb";
// Sender's Ethereum address
const senderAddress = "0x2B9e0CbB6737615f2749fc3638a8bAD048f4977c";

// Recipient's Ethereum address
const recipientAddress = "0x3c7d845db45606D0673599A6284684c6e5F941E7";

// Convert the private key to an account
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);

// Check the balance of the sender's account
web3.eth.getBalance(senderAddress, (err, balance) => {
    if (err) {
        console.error("Error getting balance:", err);
        return;
    }

    console.log("Sender balance:", web3.utils.fromWei(balance, "ether"), "ETH");

    // Create a transaction object
    const txObject = {
        from: senderAccount.address,
        to: recipientAddress,
        value: web3.utils.toWei("0.1", "ether"), // Amount to send in Wei
        gas: 21000, // Gas limit
        gasPrice: web3.utils.toWei("10", "gwei"), // Gas price in Wei
    };

    // Sign the transaction with the sender's private key
    web3.eth.accounts.signTransaction(
        txObject,
        senderPrivateKey,
        (err, signedTx) => {
            if (err) {
                console.error("Error signing transaction:", err);
                return;
            }

            // Send the signed transaction
            web3.eth
                .sendSignedTransaction(signedTx.rawTransaction)
                .on("transactionHash", (hash) => {
                    console.log("Transaction Hash:", hash);
                })
                .on("receipt", (receipt) => {
                    console.log("Transaction Receipt:", receipt);
                })
                .on("error", (err) => {
                    console.error("Transaction Error:", err);
                });
        }
    );
});
