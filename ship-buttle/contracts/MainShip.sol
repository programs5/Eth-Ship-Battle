pragma solidity ^0.4.24;

contract MainShip {
    address public owner;

    uint[] coCount;

    // очередь ожидающих начала игры 
    GamerInitData[] waitingQueue;

    struct GamerInitData {
        address gamer;
        uint stateHash; // хешь от суммы цифр которые обозначают данные по каждому кораблю игрока
        uint beat;      // размер ставки игрока   
    }

    mapping(address => GamerInitData[2]) public gamerData;
    
    // конструктор
    constructor() public {
        owner = msg.sender;
    }
    
    // инициализируем новое обращение от игрока
    function initNewGame(uint _stateHash, uint _beat) public payable {
        require(_beat > 0, "Размер ставки должен быть больше нуля");

        if(waitingQueue.length == 0){
            // если не с кем играть, добавляем игрока в очередь
            waitingQueue.push(GamerInitData(msg.sender,  _stateHash, _beat));
        }
        else{
            // если в очереди уже есть игрок в статусе ожидания



        }

        GamerInitData storage init;

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