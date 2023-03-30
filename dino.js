class Dino {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
         canvas = document.getElementById('canvas');
         context = canvas.getContext('2d');
    }
    drawDino() {
        let img = new Image()
        img.onload = () => {
            context.drawImage(img, this.x, this.y, this.width, this.height)

        }
        img.src = "khủng long.png"
    }
}