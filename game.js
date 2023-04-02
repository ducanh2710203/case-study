const audio = document.querySelector(".audio");
const audio1 = document.querySelector(".audio1");
const audio3 = document.querySelector(".audio2");
let dino = new Dino(100, 100, 70, 90)
let food = new Food(400, 400, 50, 50)
let bom1 = new Obstacle(Math.random() * 400, Math.random() * 400, 50, 60)
let dino1 = new Obstacle(Math.random() * 400, Math.random() * 400, 50, 60)
var set;

var yourScore = 0;

function update() {
    dino.dichuye()
    bom1.context.clearRect(0, 0, dino.canvas.width, dino.canvas.height)
    bom1.drawObstacle(bom1, "bom.png");
    dino1.drawObstacle(dino1, "dino1.png");
    dino.drawDino();
    food.drawFood();
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
    //vẽ điểm số
    dino.drowscore()
    dino1.drowscore()

}
function star() {
    audio.play();
    isLose = true;
    update()
    myScore = 0
    yourScore = 0
    set = setInterval(update, 16)
    food.x = Math.random() * (food.canvas.width - food.width);
    food.y = Math.random() * (food.canvas.height - food.height);
    bom1.x = Math.random() * (bom1.canvas.width - bom1.width);
    bom1.y = Math.random() * (bom1.canvas.height - bom1.height);
    dino1.x = Math.random() * (dino1.canvas.width - dino1.width);
    dino1.y = Math.random() * (dino1.canvas.height - dino1.height);
}
function End() {
    audio.pause()
    audio1.pause()
    audio3.pause()
    clearInterval(set)
}