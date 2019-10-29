const winCombs = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0,3,6],[1, 4, 7], [2, 5, 8],[0, 4, 8],[2,4,6]]
const MAX_TURNS = 9

let playerX = [];
let playerO = [];
let turn = 1;
let win = null;
let msg = "Ready? Set. Go!  "


// listens for users input and verifies that it is a legal play. If legal renderPlay() is called 
function init(){
    document.addEventListener('click', function(evt){
        console.log('click noticed', evt.target.id)
        let target = evt.target.id
        switch(true){
            case target === 'reset':
                reset();
                break;
            case target === "":
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
                renderPlay(parseInt(target))
                break;
            
        }
    }
    );
}


// Adds player's move to their array, changes display to reflect play, calls isWinning, and then switches turn var
function renderPlay(numClkd){
    let brdDisp = document.getElementById(numClkd)
    switch(turn){
        case 1:
            playerX.push(numClkd)
            brdDisp.innerText = 'X'
            isWinning(playerX)
            turn *= -1
            break;
        case -1:
            playerO.push(numClkd)
            brdDisp.innerText = 'O'
            isWinning(playerO)
            turn*=-1
            break;
    }
}

// verifies if the player has any of the winning combinations in their array. 
// If they do have a winning combination, showMsg is called.
// If they have filled up the board, showMsg is also called.
function isWinning(plyr){
    for(let idx = 0; idx<winCombs.length; idx++){
        for (let i = 0; i < winCombs[idx].length; i++){
          switch(true){
            case !plyr.includes(winCombs[idx][i]):
              i = winCombs[idx].length 
              break;
            case i+1 === winCombs[idx].length:
              win = turn;
              showMsg(win)
              break;
            }
        }
    }
    if (playerX.length+playerO.length===MAX_TURNS){
        showMsg(2)
    }
}

//Based upon incoming var, displays message indicating who is winner or if it a cat's game.
// reset is called after a 1 second timer is completed.
function showMsg(win){
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
    // init()
    window.setTimeout(reset, 1*1000)
}

// resets all variables to initial states and removes plays from board.
function reset(){
    playerX = [];
    playerO = [];
    turn *= -1;
    win = null;
    msg = "Ready? Set. Go!";
    document.getElementById('msg').innerText = msg;
    document.querySelectorAll('.square').forEach(function(tag){
        tag.innerText=""
        console.log(tag)
    }
    );
}

init()