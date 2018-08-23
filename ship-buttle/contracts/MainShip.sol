pragma solidity ^0.4.24;

contract MainShip {
    address public owner;
    uint[] coCount;

    struct InitData {
        uint256 amountBet;
        uint256 numberSelected;
    }

    mapping(address => InitData) public gamersQueue;
    
    // конструктор
    constructor() public {
        owner = msg.sender;

        coCount.push(1024);
        coCount.push(1023);
        coCount.push(1022);
    }

   //function IsPlayerExists() public constant returns(bool) {
   //   return gamersQueue[msg.sender];
   //}

    // запрос на начало новой игры
    function reqNewGame(uint[] _coCount) public payable {
        coCount = _coCount;
        //require(IsPlayerExists);
    }

    function getCount() public view returns(uint){
        return coCount.length;
    }
}