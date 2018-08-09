//require('babel-register');
//require('babel-polyfill');

//var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {

    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {  // testnet
      host: "localhost",
      port: 8547,
      network_id: 4,
      gas: 2159825, //4704588, // web3.eth.getBlock("pending").gasLimit // GAS LIMIT value
      from: "0x937febbc45628f1bb2445f3c569b6b5ff05fed9a"

      //gasPrice: 45000000000,

      //provider: function() {
      //  return new HDWalletProvider("my own mnemonic", "https://rinkeby.infura.io/kp7Z0DFPGq7d3S2lIKEz")
      //}
    },

    mainnet: {
      host: "localhost",
      port: 8549,
      network_id: 1,
      gasPrice: 10 * 1e9
    }
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
}
};
