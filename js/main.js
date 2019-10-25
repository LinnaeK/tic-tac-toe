const winCombs = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0,3,6],[1, 4, 7], [2, 5, 8],[0, 4, 8],[2,4,6]]

let playerX = [];
let playerO = [];
let turn = 1;
let win;

function init(){
    document.addEventListener('click', function(evt){
        numClkd = parseInt(evt.target.id) 
        if (turn === 1){
            playerX.push(numClkd)
            isWinning(playerX)
            console.log('playerX= ' + playerX)
            turn *= -1
        }else{
            playerO.push(numClkd)
            isWinning(playerO)
            console.log('playerO+ ' + playerO)
            turn*=-1
        }
    }
    );
}

function isWinning(plyr){
    for(let idx = 0; idx<winCombs.length; idx++){
        for (let i = 0; i < winCombs[idx].length; i++){
          console.log('ran' +i)
            if(!plyr.includes(winCombs[idx][i])){
              win = false;
              console.log('player doesnt have a winning combo, next')
              i = winCombs[idx].length 
            }else if(i+1 === winCombs[idx].length){
              win = turn;
              console.log('I won')
            }
        }
        if(win === true){
          idx = winCombs.length + 1
        }
      }
}
init()