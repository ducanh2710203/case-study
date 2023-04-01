class Obstacle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }

    drawObstacle(bom1, srcImg) {
        let img = new Image()
        img.onload = () => {
            this.context.drawImage(img, this.x, this.y, this.width, this.height)

        }
        img.src = srcImg

    }
    chasebomb(){
        if (this.x < dino.x) {
            this.x += 2;
        } else {
            this.x -= 2;
        }
        if (this.y < dino.y) {
            this.y += 2;
        } else {
            this.y -= 2;
        }
    }
    meatchaser(){
        if (this.x < food.x) {
            this.x += 4;
        } else {
            this.x -= 4;
        }
        if (this.y < food.y) {
            this.y += 4;
        } else {
            this.y -= 4;
        }
    }
    eatfood(){
        if (this.x < food.x + food.width && this.x + this.width > food.x && this.y < food.y + food.height && this.y + this.height > food.y) {
            yourScore++;
            food.x = Math.random() * (canvas.width - food.width);
            food.y = Math.random() * (canvas.height - food.height);
        }
    }
    bombhitsthemaincharacter(){

        if (dino.x < this.x + this.width && dino.x + dino.width > this.x && dino.y < this.y + this.height && dino.y + dino.height > this.y) {
            clearInterval(set)
            isLose = false;
            audio.pause()
            audio1.play()
        }
    }
}