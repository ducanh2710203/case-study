var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const audio = document.querySelector(".audio");
const audio1 = document.querySelector(".audio1");


class Dino {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

    }
}

class Food {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

let dino = new Dino(100, 100, 70, 90)
let food = new Food(400, 400, 50, 50)
let food1 = new Food(Math.random() * 400, Math.random() * 400, 50, 50)
var score = 0;

function drawDino() {
    let img = new Image()
    img.onload = () => {
        this.context.drawImage(img, dino.x, dino.y, dino.width, dino.height)

    }
    img.src = "khủng long.png"
}


function drawFood() {
    let img = new Image()
    img.onload = () => {
        this.context.drawImage(img, food.x, food.y, food.width, food.height)

    }
    img.src = "thit.png"
}

function drawObstacle() {
    let img = new Image()
    img.onload = () => {
        this.context.drawImage(img, food1.x, food1.y, food1.width, food1.height)

    }
    img.src = "bom.png"
}

function end() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function update() {
    canvas.addEventListener("mousemove", function (e) {
        let xMouse = e.clientX;
        let yMouse = e.clientY;
        dino.x = xMouse - dino.width / 2
        dino.y = yMouse - dino.height / 2


    })
    if (dino.x < food.x + food.width && dino.x + dino.width > food.x && dino.y < food.y + food.height && dino.y + dino.height > food.y) {
        score++;
        food.x = Math.random() * (canvas.width - food.width);
        food.y = Math.random() * (canvas.height - food.height);

    }
    if (dino.x <= food1.x + food1.width && dino.x + dino.width >= food1.x && dino.y <= food1.y + food1.height && dino.y + dino.height >= food1.y) {

        end()
        // alert("bạn đã thua")
        clearInterval(set)
        audio.pause()
        audio1.play()
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawObstacle();
    drawDino();
    drawFood();
    if (score < 20) {
        set
    } else {
            end()
        context.fillStyle = 'red';
        context.font = '20px Arial';
        context.fillText("you win", 50, 50)

        clearInterval(set)
        audio.pause()
    }
    context.fillStyle = 'red';
    context.font = '20px Arial';
    context.fillText('Score: ' + score, 10, 30);
}

var set

function star() {
    audio.play();

    update()
    score = 0
    set = setInterval(update, 100);
    food.x = Math.random() * (canvas.width - food.width);
    food.y = Math.random() * (canvas.height - food.height);
    food1.x = Math.random() * (canvas.width - food1.width);
    food1.y = Math.random() * (canvas.height - food1.height);
}

function End() {
    end()
    clearInterval(set)

}
