var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const audio = document.querySelector(".audio");
const audio1 = document.querySelector(".audio1");
const audio3 = document.querySelector(".audio2");
var set;

let isLose;
let dino = new Dino(100, 100, 70, 90)
let food = new Food(400, 400, 50, 50)
let bom1 = new Obstacle(Math.random() * 400, Math.random() * 400, 50, 60)
let dino1 = new Obstacle(Math.random() * 400, Math.random() * 400, 50, 60)
var myScore = 0;
var yourScore = 0;

function update() {
    canvas.addEventListener("mousemove", function (e) {
        let xMouse = e.clientX;
        let yMouse = e.clientY;
        dino.x = xMouse - (dino.width / 2) - 270
        dino.y = yMouse - (dino.height / 2)
        if (!isLose) {
            context.fillStyle = 'red';
            context.font = '20px fantasy';
            context.fillText("you lose", 470, 50)
        }
    })
    // bom đuổi nhân vật
    bom1.chasebomb()
    //đối thú đuổi thịt
    dino1.meatchaser()
    // khủng long ăn thịt
    dino.eatfood()
    // đối thủ ăn thịt
    dino1.eatfood()
    // bọm chạm nhân vật
    bom1.bombhitsthemaincharacter();

    context.clearRect(0, 0, canvas.width, canvas.height)
    bom1.drawObstacle(bom1, "bom.png");
    dino1.drawObstacle(dino1, "dino1.png");
    dino.drawDino();
    food.drawFood();
    if (myScore < 10) {
    } else {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = 'red';
        context.font = '20px fantasy';
        context.fillText("you win", 470, 50)
        audio3.play()
        clearInterval(set)
        audio.pause()
    }
    if (yourScore < 10) {
    } else {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = 'red';
        context.font = '20px fantasy';
        context.fillText("you lose", 470, 50)
        audio1.play()
        clearInterval(set)
        audio.pause()
    }
    context.fillStyle = 'red';
    context.font = '20px fantasy';
    context.fillText('my Score: ' + myScore, 10, 30);
    context.fillStyle = 'red';
    context.font = '20px fantasy';
    context.fillText('your Score: ' + yourScore, 870, 30);
}

function star() {
    audio.play();
    isLose = true;
    update()
    myScore = 0
    yourScore = 0
    set = setInterval(update, 16)
    food.x = Math.random() * (canvas.width - food.width);
    food.y = Math.random() * (canvas.height - food.height);
    bom1.x = Math.random() * (canvas.width - bom1.width);
    bom1.y = Math.random() * (canvas.height - bom1.height);
    dino1.x = Math.random() * (canvas.width - dino1.width);
    dino1.y = Math.random() * (canvas.height - dino1.height);

}

function End() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    audio.pause()
    audio1.pause()
    audio3.pause()
    clearInterval(set)
}