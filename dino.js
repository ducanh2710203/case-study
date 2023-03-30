class Dino {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
         this.canvas = document.getElementById('canvas');
         this.context = this.canvas.getContext('2d');
    }
    drawDino() {
        let img = new Image()
        img.onload = () => {
            this.context.drawImage(img, this.x, this.y, this.width, this.height)

        }
        img.src = "khủng long.png"
    }

}