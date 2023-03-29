var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const audio = document.querySelector(".audio");
const audio1 = document.querySelector(".audio1");
const audio3 = document.querySelector(".audio2");;


let dino = new Dino(100, 100, 70, 90)
let food = new Food(400, 400, 50, 50)
let bom1 = new Food(Math.random() * 400, Math.random() * 400, 50, 60)
let bom2 = new Food(Math.random() * 400, Math.random() * 400, 50, 60)
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

function drawObstacle(bom1) {
    let img = new Image()
    img.onload = () => {
        this.context.drawImage(img, bom1.x, bom1.y, bom1.width, bom1.height)

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
        bom1.x = Math.random() * (canvas.width - bom1.width);
        bom1.y = Math.random() * (canvas.height - bom1.height);
        bom2.x = Math.random() * (canvas.width - bom2 .width);
        bom2.y = Math.random() * (canvas.height - bom2.height);

    }
    if (dino.x < bom1.x + bom1.width && dino.x + dino.width > bom1.x && dino.y < bom1.y + bom1.height && dino.y + dino.height > bom1.y) {

        end()
        alert("bạn đã thua")
        clearInterval(set)
        audio.pause()
        audio1.play()
    }
    if (dino.x < bom2.x + bom2.width && dino.x + dino.width > bom2.x && dino.y < bom2.y + bom2.height && dino.y + dino.height > bom2.y) {

        end()
        alert("bạn đã thua")
        clearInterval(set)
        audio.pause()
        audio1.play()
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawObstacle(bom1);
    drawObstacle(bom2);
    drawDino();
    drawFood();
    if (score < 10) {
    } else {
        end()
        context.fillStyle = 'red';
        context.font = '20px Arial';
        context.fillText("you win", 500, 50)
        audio3.play()


        clearInterval(set)
        audio.pause()
    }
    context.fillStyle = 'red';
    context.font = '20px Arial';
    context.fillText('Score: ' + score, 500, 30);
}

// update()

var set

function star() {
    audio.play();

    update()
    score = 0
    set = setInterval(update, 15)
    food.x = Math.random() * (canvas.width - food.width);
    food.y = Math.random() * (canvas.height - food.height);
    bom1.x = Math.random() * (canvas.width - bom1.width);
    bom1.y = Math.random() * (canvas.height - bom1.height);
    bom2.x = Math.random() * (canvas.width - bom2.width);
    bom2.y = Math.random() * (canvas.height - bom2.height);
}

function End() {
    end()
    audio.pause()
    audio1.pause()
    audio3.pause()
    clearInterval(set)


}
const fireworksContainer = document.getElementById('fireworks-container');
const fireworksButton = document.getElementById('fireworks-button');

function launchFireworks() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 100 + '%';
    fireworksContainer.appendChild(firework);
}

fireworksButton.addEventListener('click', function() {
    for (let i = 0; i < 30; i++) {
        setTimeout(launchFireworks, i * 100);
    }
});
