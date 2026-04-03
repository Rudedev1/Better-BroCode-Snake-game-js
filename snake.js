const gameBoard = document.querySelector("#game-container");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#score");
const resetBtn = document.querySelector("#reset");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "#58d2e7";
const snakeColor = "#586de7";
const snakeBorder = "black";
const foodColor = "#e75858";
const foodBorder = "black";
const specialFoodColor = "#e7d258";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let specialFoodX;
let specialFoodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
window.addEventListener("keydown", spaceReset);
resetBtn.addEventListener("click", resetGame);

gameStart();

// Functions

function gameStart(){
    if(running) return;
    running = true;
    scoreText.textContent = score;
    createFood();
    createSpecialFood();
    drawFood();
    drawSpecialFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            drawSpecialFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 150)
    }
    else {
        displayGameOver();
        return;
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function randomFood(min, max){
    const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
}
function createFood(){
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameHeight - unitSize);
};
function createSpecialFood(){
    if (Math.random() < 0.1) {
    specialFoodX = randomFood(0, gameWidth - unitSize);
    specialFoodY = randomFood(0, gameHeight - unitSize);
    } else {
        specialFoodX = null;
        specialFoodY = null;
    }
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.strokeStyle = foodBorder;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
    ctx.strokeRect(foodX, foodY, unitSize, unitSize);
};
function drawSpecialFood(){
    if (specialFoodX !== null && specialFoodY !== null) {
    ctx.fillStyle = specialFoodColor;
    ctx.strokeStyle = foodBorder;
    ctx.fillRect(specialFoodX, specialFoodY, unitSize, unitSize);
    ctx.strokeRect(specialFoodX, specialFoodY, unitSize, unitSize);   
    }
};
function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity}
    snake.unshift(head);
    if(snake[0].x == foodX && snake[0].y == foodY){
        score+=1;
        scoreText.textContent = score;
        createFood();
        if (Math.random() < 0.1) createSpecialFood();
    }
    else if(specialFoodX !== null && snake[0].x == specialFoodX && snake[0].y == specialFoodY){
        score+=5;
        scoreText.textContent = score;
        createSpecialFood();
    }
    else {
        snake.pop();
    }
};
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(event){
    const keyPressed = event.key;
    const LEFT = "ArrowLeft";
    const UP = "ArrowUp";
    const RIGHT = "ArrowRight"; 
    const DOWN = "ArrowDown";

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
        xVelocity = -unitSize;
        yVelocity = 0;
            break
        case(keyPressed == UP && !goingDown):
        xVelocity = 0;
        yVelocity = -unitSize;
            break
        case(keyPressed == RIGHT && !goingLeft):
        xVelocity = unitSize;
        yVelocity = 0;
            break
        case(keyPressed == DOWN && !goingUp):
        xVelocity = 0;
        yVelocity = unitSize;
            break
    }

};
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};
function displayGameOver(){
    ctx.font = "50px Verdana";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
};
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};
function spaceReset(event){
const keyPressed = event.key;
const SPACE = " ";
if(keyPressed == SPACE) {
resetGame();
}
}