const MainShip = artifacts.require("MainShip.sol");

module.exports = function(deployer, network) {
  deployer.deploy(MainShip);
};
