class Obstacle{
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }
    drawObstacle(bom1,srcImg) {
        let img = new Image()
        img.onload = () => {
            this.context.drawImage(img, this.x, this.y, this.width, this.height)

        }
        img.src = srcImg

    }
}