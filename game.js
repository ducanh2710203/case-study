var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const audio = document.querySelector(".audio");
const audio1 = document.querySelector(".audio1");
const audio3 = document.querySelector(".audio2");


let dino = new Dino(100, 100, 70, 90)
let food = new Food(400, 400, 50, 50)
let bom1 = new Food(Math.random() * 400, Math.random() * 400, 50, 60)
let dino1 = new Food(Math.random() * 400, Math.random() * 400, 50, 60)
var myScore = 0;
var yourScore = 0;


function end() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function update() {
    canvas.addEventListener("mousemove", function (e) {
        let xMouse = e.clientX;
        let yMouse = e.clientY;
        dino.x = xMouse - (dino.width / 2) - 270
        dino.y = yMouse - (dino.height / 2)


    })

    if (bom1.x < dino.x) {
        bom1.x += 2;
    } else {
        bom1.x -= 2;
    }

    if (bom1.y < dino.y) {
        bom1.y += 2;
    } else {
        bom1.y -= 2;
    }


    if (dino1.x < food.x) {
        dino1.x += 4;
    } else {
        dino1.x -= 4;
    }

    if (dino1.y < food.y) {
        dino1.y += 4;
    } else {
        dino1.y -= 4;
    }
    if (dino.x < food.x + food.width && dino.x + dino.width > food.x && dino.y < food.y + food.height && dino.y + dino.height > food.y) {
        myScore++;
        food.x = Math.random() * (canvas.width - food.width);
        food.y = Math.random() * (canvas.height - food.height);
    }
    // dino1 ăn thịt
    if (dino1.x < food.x + food.width && dino1.x + dino1.width > food.x && dino1.y < food.y + food.height && dino1.y + dino1.height > food.y) {
        yourScore++;
        food.x = Math.random() * (canvas.width - food.width);
        food.y = Math.random() * (canvas.height - food.height);
    }
    if (dino.x < bom1.x + bom1.width && dino.x + dino.width > bom1.x && dino.y < bom1.y + bom1.height && dino.y + dino.height > bom1.y) {

        end()
        alert("bạn đã thua")
        clearInterval(set)
        audio.pause()
        audio1.play()
    }


   end()

    bom1.drawObstacle(bom1, "bom.png");
    dino1.drawObstacle(dino1, "dino1.png");
    dino.drawDino();
    food.drawFood();
    if (myScore < 20) {
    } else {
        end()
        context.fillStyle = 'red';
        context.font = '20px Arial';
        context.fillText("you win", 500, 50)
        audio3.play()


        clearInterval(set)
        audio.pause()
    }
    if (yourScore < 20) {
    } else {
        end()
        context.fillStyle = 'red';
        context.font = '20px Arial';
        context.fillText("you lose", 500, 50)
        audio1.play()


        clearInterval(set)
        audio.pause()
    }
    context.fillStyle = 'red';
    context.font = '20px Arial';
    context.fillText('myScore: ' + myScore, 10, 30);
    context.fillStyle = 'red';
    context.font = '20px Arial';
    context.fillText('yourScore: ' + yourScore, 870, 30);
}

// update()

var set

function star() {
    // alert("di chuyển khung long của bạn để ăn thịt và đừng để quả bom đuổi")
    audio.play();

    update()
    myScore = 0
    yourScore = 0
    set = setInterval(update, 15)
    food.x = Math.random() * (canvas.width - food.width);
    food.y = Math.random() * (canvas.height - food.height);
    bom1.x = Math.random() * (canvas.width - bom1.width);
    bom1.y = Math.random() * (canvas.height - bom1.height);
    dino1.x = Math.random() * (canvas.width - dino1.width);
    dino1.y = Math.random() * (canvas.height - dino1.height);
}

function End() {
    end()
    audio.pause()
    audio1.pause()
    audio3.pause()
    clearInterval(set)
}




