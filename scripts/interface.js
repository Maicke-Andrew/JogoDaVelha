document.addEventListener('DOMContentLoaded', ()=>{


    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    if(handleMove(event.target.id)){
        setTimeout(()=>{
            if(playerTime == 0){
            alert("Jogo Terminou - O Jogador X Venceu");
        }else if(playerTime == 1){
            alert("Jogo Terminou - O Jogador O Venceu")
        }else{
            alert("Velha")    
        }
        }, 10);
    };
    updateSquare(event.target.id);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function allSquares(){
    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = ''
        }else if(square.firstChild != undefined){
            square.removeChild(square.firstChild)
        }
   })
}

function reset(){
    board = ['','','','','','','','','',]
    playerTime = 0;
    gameOver = false;
    allSquares()
}