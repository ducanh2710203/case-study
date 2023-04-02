class Dino {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.myScore = 0
    }
    drawDino() {
        let img = new Image()
        img.onload = () => {
            this.context.drawImage(img, this.x, this.y, this.width, this.height)
        }
        img.src = "khủng long.png"
    }
    eatfood(){
        if (this.x < food.x + food.width && this.x + this.width > food.x && this.y < food.y + food.height && this.y + this.height > food.y) {
            this.myScore++;
            food.x = Math.random() * (this.canvas.width - food.width);
            food.y = Math.random() * (this.canvas.height - food.height);
        }
        if (this.myScore < 10) {
        } else {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.context.fillStyle = 'red';
            this.context.font = '20px fantasy';
            this.context.fillText("you win", 470, 50)
            audio3.play()
            clearInterval(set)
            audio.pause()
        }
    }
    drowscore(){
        this.context.fillStyle = 'red';
        this.context.font = '20px fantasy';
        this.context.fillText('my Score: ' + this.myScore, 10, 30);

    }
    dichuye(){
        this.canvas.addEventListener("mousemove", function (e) {
            let xMouse = e.clientX;
            let yMouse = e.clientY;
            dino.x = xMouse - (dino.width / 2) - 270
            dino.y = yMouse - (dino.height / 2)

        })
    }
}