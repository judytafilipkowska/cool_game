class Platform {
    //properites
    constructor() {
        this.image = new Image();
        this.image.src = './img/Pad_01_2.png';
        this.width = canvas.width / 8; 
        this.height = 50;
        this.x = 1200;
        this.y = canvas.height/ 1.05;
    }

    //methods
    drawPlatform = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    };
 

    movePlatform = () => {
        this.x -=5
    }
   
}
