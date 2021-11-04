class Item {
    //properites
    constructor(posX) {
        this.image = new Image();
        this.image.src = "./img/Coin_01.png";
        this.width = 40; 
        this.height = 40;
        this.x = posX;
        // this.y = canvas.height/50;
        this.y = 0;
    }

    //methods
    drawItem = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    };
    itemsMove = () => {
        this.y += 1.5;
    }
}