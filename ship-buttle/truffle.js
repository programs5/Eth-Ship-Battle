//require('babel-register');
//require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {

    development: {
      host: "localhost",
      port: 8545,
      from: "0x3c3782dfda6d3f8b60f627eeca958a4f6c0de17f", //"0x4089db80fb6ff9aad8adbe1a83001f73f938efa6",
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider("recycle series vicious exercise slim keep tool north voice detail length carbon", "https://rinkeby.infura.io/kp7Z0DFPGq7d3S2lIKEz")
     },
     from: "0x937febbc45628f1bb2445f3c569b6b5ff05fed9a",
     network_id: 4
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
