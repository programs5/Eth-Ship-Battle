pragma solidity ^0.4.24;

contract MainShip {
    address public owner;
    uint[] coCount;

    struct GamerInitData {
        uint stateHash;
        uint beat;        
    }

    mapping(address => GamerInitData) public gamerData;
    
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

    function initNewGame(uint _stateHash, uint _beat) public payable {
        GamerInitData init;

        init.stateHash = _stateHash;
        init.beat = _beat;        
    }


    // запрос на начало новой игры
    function reqNewGame(uint[] _coCount) public payable {
        coCount = _coCount;
        //require(IsPlayerExists);
    }

    function getCount() public view returns(uint){
        return coCount.length;
    }
}