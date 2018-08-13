web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/kp7Z0DFPGq7d3S2lIKEz"));

var payment_value;
var contractAddr;
var privKey;
var addressFrom;
var contract;
var contractAbi;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

window.onload = function() {
    payment_value    = document.getElementById("payment_value").value
    contractAddr     = document.getElementById("contract_address").value
    privKey          = document.getElementById("private_key").value

    addressFrom      = web3.eth.accounts.privateKeyToAccount(`${privKey}`).address;

    setLog(`Sender Address: ${addressFrom}`);
    setLog(`addressFrom: ${addressFrom}`);

    web3.eth.getBalance(addressFrom).then(res=> {setLog("getBalance: " + web3.utils.fromWei(res) + " ether")});
    web3.eth.getGasPrice().then(res=> {setLog(`getGasPrice: ${res}`)});

    contractAbi = [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "gamersQueue",
        "outputs": [
          {
            "name": "amountBet",
            "type": "uint256"
          },
          {
            "name": "numberSelected",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_coCount",
            "type": "uint256[]"
          }
        ],
        "name": "reqNewGame",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }];

    contract = new web3.eth.Contract(contractAbi, contractAddr, {from: addressFrom});
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function reqNewGame() {
  // 0,00014972 ether - за вызов функции из контракта

  encoded = contract.methods.reqNewGame([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).encodeABI()

  web3.eth.getTransactionCount(addressFrom).then( txCount => {
      var tx = {
          from: addressFrom,
          to: contractAddr,
          data: encoded,
          nonce: web3.utils.toHex(txCount),
          gas: 1000000 //web3.utils.toHex(3000000000)
      }

      web3.eth.accounts.signTransaction(tx, privKey)
      .then(signed => {

          web3.eth.sendSignedTransaction(signed.rawTransaction)
          .on('receipt', res => {
              console.log(res)
          })
      })
  })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function readData() {
      contract.methods.getCount()
      .call(function(error, result) {
        setLog(`>>> getCount: ${result}`)
      })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   function setLog(message) {
      var current = new Date()
      var tm = "[" + current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + "." + current.getMilliseconds() + "] "

      if (typeof message == 'object') {
         log.innerHTML += (JSON && JSON.stringify ? tm + JSON.stringify(message) : tm + message) + '<br />'
      }
      else {
         log.innerHTML += tm + message + '<br />'
      }
}
