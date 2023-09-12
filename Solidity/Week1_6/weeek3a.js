const { Web3 } = require("web3");
const web3 = new Web3(
    "https://mainnet.infura.io/v3/fd06bb9b23ac4f83be4afe65b79a8cf0"
);
web3.eth.getBlockNumber().then(console.log).catch(console.error);
