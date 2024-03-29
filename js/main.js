const winCombs = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0,3,6],[1, 4, 7], [2, 5, 8],[0, 4, 8],[2,4,6]]
const MAX_TURNS = 9

let playerX = [];
let playerO = [];
let turn = 1;
let win = null;
let msg = ""


function init(){
    console.log('ran init')
    document.addEventListener('click', function(evt){
            console.log('received click')
            numClkd = parseInt(evt.target.id) 
            if(!playerX.includes(numClkd)&&!playerO.includes(numClkd)&&win === null&&evt.target.id !== 'reset'){
                if (turn === 1){
                    playerX.push(numClkd)
                    evt.target.innerText = 'X'
                    isWinning(playerX)
                    // console.log('playerX= ' + playerX)
                    turn *= -1
                }else{
                    playerO.push(numClkd)
                    evt.target.innerText = 'O'
                    isWinning(playerO)
                    // console.log('playerO+ ' + playerO)
                    turn*=-1
                }
            }  else if((playerX.length+playerO.length)===MAX_TURNS){
                showMsg(2)
            } 
        }
    );
}



function isWinning(plyr){
    for(let idx = 0; idx<winCombs.length; idx++){
        for (let i = 0; i < winCombs[idx].length; i++){
        //   console.log('ran' +i)
            if(!plyr.includes(winCombs[idx][i])){
            //   console.log('player doesnt have a winning combo, next')
              i = winCombs[idx].length 
            }else if(i+1 === winCombs[idx].length){
              win = turn;
            //   console.log(winCombs.length)
              idx = winCombs.length
            //   console.log('I won')
              showMsg(win)
              return
            }
        }
        if(idx+1 === winCombs.length && (playerX.length+playerO.length===MAX_TURNS)){
            showMsg(2)
        }
      }
}

function showMsg(win){
    console.log('ran show msg')
    if(win === 2){
        msg = "It's a Cat's Game!"
    }else if(win===1){
        msg = "Congratulations Player X!"
    }else if(win ===-1){
        msg = "Congratulations Player O!"
    }
    document.getElementById('msg').innerText = msg
    setTimeout(reset, 1000)

}

function reset(){
    playerX = [];
    playerO = [];
    turn = 1;
    win = null;
    document.getElementById('msg').innerText = "";
    document.querySelectorAll('.square').forEach(function(tag){
        tag.innerText="";
        console.log(tag);
    }
    );
    init()
}

init()