var MainShip = artifacts.require('./MainShip.sol');

contract('MainShip', function(accounts) {

  it("should return a correct count", function(done) {

    var main_ship = MainShip.deployed();

    main_ship.then(function(contract) {
      return contract.getCount.call();
   }).then(function(result){
      assert.isTrue(result >= 0);
      done();
   })
  });
});
