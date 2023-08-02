class Beer {
    url;
    x;
    y;
    v;
    w;
    h;
    constructor(url, x, y, v, width, height) {
        this.url = url;
        this.x = x;
        this.y = y;
        this.v = v;
        this.w = width;
        this.h = height;
    }
    drawBeer() {
        let image = new Image();
        // let url = this.url;
        // image.src = url;
        image.src = this.url
        // image.onload = () => {
        ctx.drawImage(image, this.x, this.y, this.w, this.h)
        // }
    }
    moveDown() {
        this.y += this.v;
    }
    checkCollisionBin(car) {
        if (this.x + this.w > car.x && this.x < car.x + car.w && this.y + this.h > car.y && this.y < car.y + car.h) {
            return true;
        }
    }
}
