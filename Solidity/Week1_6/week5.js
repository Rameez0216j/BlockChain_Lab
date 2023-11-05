// const Web3 = require('web3');
// const web3 = new Web3('http://localhost:7545'); // Connect to your local Ganache instance

// const SimpleStorage = artifacts.require('SimpleStorage'); // Replace with your contract's name

// const interactWithContract = async () => {
//     const accounts = await web3.eth.getAccounts();
//     const ownerAccount = accounts[0];

//     const simpleStorageInstance = await SimpleStorage.deployed();

//     // Get the current data
//     const currentData = await simpleStorageInstance.data.call();
//     console.log('Current Data:', currentData.toNumber());

//     // Set new data
//     await simpleStorageInstance.setData(42, { from: ownerAccount });

//     // Get the updated data
//     const updatedData = await simpleStorageInstance.data.call();
//     console.log('Updated Data:', updatedData.toNumber());
// };

// interactWithContract();












const {Web3} = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); // Connect to your local Ganache instance

let contract = new web3.eth.Contract(
    [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_x",
                    "type": "uint256"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "x",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],"0x9F855C262287Cc6f7a6FC5dA2420A00441bba8a1");

    contract.methods.x().call().then(console.log());  // getting value
    contract.methods.set(90).send({from:"0xD2D473Ac80Df9c59B7F8817920Ee8D06e1a6f581"}); // setting value    


