pragma solidity ^0.4.24;

contract MainShip {
    address public owner;
        
    GamerData[] gameList;
    mapping(address => uint[]) idxGamer;
    
    // игровые данные участника
    struct GamerData {
        address addr;
        uint stateHash; // хешь от суммы цифр которые обозначают данные по каждому кораблю игрока
        uint bet;      // размер ставки игрока   
        bool inGame; // true если пользователь находится в игре
        bool gameIsOver; // true если игра завершилась
    }
    
    // конструктор
    constructor() public {
        owner = msg.sender;
        
        // require(owner != address(0), "");
    }
    
    // обрабатываем входящий запрос на начало игры
    function initNewGame(uint _stateHash, uint _bet) public payable {
        require(_bet > 0, "Размер ставки должен быть больше нуля");

        // если длина массива четная (свободных игроков нет) добавляем нового игрока в список ожидания
        if(gameList.length % 2 != 0){
            gameList.push(GamerData(msg.sender,  _stateHash, _bet, false, false));
            idxGamer[msg.sender].push(gameList.length-1);
        }
        // если нечетное, кто то ждет игры
        else{
            require(gameList[gameList.length-1].addr != msg.sender, "Нельзя играть самому с собой");
            // отмечаем что ожидавшему игроку нашлась пара и он начинает играть
            gameList[gameList.length-1].inGame = true; 
            // добавляем второго игрока
            gameList.push(GamerData(msg.sender,  _stateHash, _bet, true, false));
            idxGamer[msg.sender].push(gameList.length-1);
        }
    }



    
    function getCount() public view returns(uint){
        //if(gameList.length > 0){
        //    //\return gameList.length;
        //    
        //}
        return gameList.length;
        
    }
    
    
}