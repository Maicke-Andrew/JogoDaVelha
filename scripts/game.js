let board = ['','','','','','','','','',]
let playerTime = 0;
let symbols = ['x', 'o'];
let gameOver = false;
let everBoard = false;
const winSequenc =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleMove(position){

    if(gameOver){
        return;
    }

    if(everBoard){
        return;
    }

    if(board[position] == ''){
       board[position] = symbols[playerTime];

       gameOver = isWin();

    if(!gameOver){
       playerTime = (playerTime == 0 ? 1 : 0);
       }
    }
    return noWin();
}

function isWin() {
    
    for(let i =0; i<winSequenc.length;i++){
        let seq = winSequenc[i];

        let array0 = seq[0];
        let array1 = seq[1];
        let array2 = seq[2];

        if(board[array0] == board[array1] &&
           board[array0] == board[array2] &&
           board[array0] != ''){
               return true;
           }
    }
    return false;
}

function noWin() {

    for(let i =0; i<board.length; i++){
        let local = board[i];
    
        if(local[0] == local[1] &&
           local[0] == local[2] &&
           local[0] == local[3] &&
           local[0] == local[4] &&
           local[0] == local[5] &&
           local[0] == local[6] &&
           local[0] == local[7] &&
           local[0] == local[8] &&
           local[0] != ''){
               return true;
           }         
    } 
    return false;
}