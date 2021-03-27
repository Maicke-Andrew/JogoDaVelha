let board = ['','','','','','','','','',]
let playerTime = 0;
let symbols = ['x', 'o'];
let gameOver = false;
let numero = 0;
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
    if(board[position] == ''){
       board[position] = symbols[playerTime];
       gameOver = isWin();
    if(!gameOver){
       playerTime = (playerTime == 0 ? 1 : 0);
       }
    }
    return gameOver;
}

function isWin(){
    
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

onload =function(){
    let x = localStorage.getItem("pontosX");
    let ptsX = document.getElementById("pontosX");
    if(x == null){
        ptsX.innerHTML = "0";
    }else{
        ptsX.innerHTML = x;
    }
    let o = localStorage.getItem("pontosO");
    let ptsO = document.getElementById("pontosO");
    if(o == null){
        ptsO.innerHTML = "0";
    }else{
        ptsO.innerHTML = o;
    }
};

function pontosXSalvos(){
    let pdhX = document.getElementById("pontosX");
    if("pontosX" == 0){
        numero++;
        pdhX.innerHTML = numero;
        localStorage.setItem("pontosX", numero);
    }else{
        let valor = localStorage.getItem("pontosX");
        valor++;
        pdhX.innerHTML = valor;
        localStorage.setItem("pontosX", valor);
    }
}

function pontosOSalvos(){
    let pdhO = document.getElementById("pontosO");
    if("pontosO" == 0){
        numero++;
        pdhO.innerHTML = numero;
        localStorage.setItem("pontosX", numero);
    }else{
        let valor = localStorage.getItem("pontosO");
        valor++;
        pdhO.innerHTML = valor;
        localStorage.setItem("pontosO", valor);
    }
}

function resetPoints(){
    localStorage.clear();
    let x = document.getElementById("pontosX");
    x.innerHTML = "0";
    let o = document.getElementById("pontosO");
    o.innerHTML = "0";

}
