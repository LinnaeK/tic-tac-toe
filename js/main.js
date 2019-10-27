const winCombs = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0,3,6],[1, 4, 7], [2, 5, 8],[0, 4, 8],[2,4,6]]
const MAX_TURNS = 9

let playerX = [];
let playerO = [];
let turn = 1;
let win = null;
let msg = ""

console.log("I'm testing my switchPractice branch")
function init(){
    document.addEventListener('click', function(evt){
        let target = parseInt(evt.target.id)
        switch(true){
            case target == NaN:
                console.log('caught reset')
                reset();
                break;
            case playerX.length+playerO.length===MAX_TURNS:
                break;
            case win != null:
                break;
            case playerX.includes(target):
                break;
            case playerO.includes(target):
                break;
            default:
                renderPlay(target)
                break;
            
        }
    }
    );
}

function renderPlay(numClkd){
    let brdDisp = document.getElementById(numClkd)
    switch(turn){
        case 1:
            playerX.push(numClkd)
            brdDisp.innerText = 'X'
            isWinning(playerX)
            console.log('playerX= ' + playerX)
            turn *= -1
            break;
        case -1:
            playerO.push(numClkd)
            brdDisp.innerText = 'O'
            isWinning(playerO)
            console.log('playerO+ ' + playerO)
            turn*=-1
            break;
    }
}
function isWinning(plyr){
    for(let idx = 0; idx<winCombs.length; idx++){
        for (let i = 0; i < winCombs[idx].length; i++){
          console.log('ran' +i)
            if(!plyr.includes(winCombs[idx][i])){
              console.log('player doesnt have a winning combo, next')
              i = winCombs[idx].length 
            }else if(i+1 === winCombs[idx].length){
              win = turn;
              console.log(winCombs.length)
              idx = winCombs.length
              console.log('I won')
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
    switch(win){
    case 2:
        msg = "It's a Cat's Game!";
        break;
    case 1:
        msg = "Congratulations Player X!"
        break;
   case -1:
        msg = "Congratulations Player O!"
        break;
    }
    document.getElementById('msg').innerText = msg
}

function reset(){
    playerX = [];
    playerO = [];
    turn = 1;
    win = null;
    msg = "" 
    document.querySelectorAll('.square').forEach(function(tag){
        tag.innerText=""
        console.log(tag)
    }
    );
    init()
}

init()