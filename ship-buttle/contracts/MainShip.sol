pragma solidity ^0.4.24;

contract MainShip {

   uint[] coCount;

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

   //function IsPlayerExists() public constant returns(bool) {
   //   return gamersQueue[msg.sender];
   //}

   // запрос на начало новой игры
   function reqNewGame(uint[] _coCount) public payable {
      coCount = _coCount;
      //require(IsPlayerExists);
   }

   function getCount() public constant returns(uint)  {

      return coCount.length;
   }


}
