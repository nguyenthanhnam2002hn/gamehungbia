class Bin {
    url;x;y;v;w;h;
    constructor(url, x, y, speed, width, height) {
        this.url = url;
        this.x = x;
        this.y = y;
        this.v = speed;
        this.w = width;
        this.h = height;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    drawCar() {
        let image = new Image();
        image.src = this.url;
        // image.onload = () => {
        this.ctx.drawImage(image, this.x, this.y, this.w, this.h);
        // }
    }
    setV() {
        this.v = v;
    }
    moveRight() {
        this.x += this.v;
    }
    moveLeft() {
        this.x -= this.v;
    }
    checkCollisionBorder() {
        if (this.x <= 0) {
            this.x = 0;
        } else if (this.x >= this.canvas.width - this.w) {
            this.x = this.canvas.width-this.w;
        }
    }
    moveBin() {
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case "ArrowLeft" :
                    this.moveLeft();
                    this.checkCollisionBorder();
                    break;
                case "ArrowRight" :
                    this.moveRight();
                    this.checkCollisionBorder();
                    break;
            }
        })
    }
}
