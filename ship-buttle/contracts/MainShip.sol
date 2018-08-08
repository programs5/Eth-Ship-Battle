pragma solidity ^0.4.23;

contract MainShip {

   address public owner;

   mapping(address => InitData) public gamersQueue;

   struct InitData {
        uint256 amountBet;
        uint256 numberSelected;
    }

   // конструктор
   constructor() public {
      owner = msg.sender;
   }

   function IsPlayerExists() public constant returns(bool) {
      return gamersQueue[msg.sender];
   }

   // запрос на начало новой игры
   function reqNewGame() public payable {

      require(IsPlayerExists);



   }


}
