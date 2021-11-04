class Game {
    // properties 
    constructor() {
        this.bg = new Image();
        this.bg.src = "/img/background.png";
        this.dude = new Dude();
        this.platformArr = [new Platform()];
        this.coinsArr = [new Item(100)];
        this.itemsDist = 50;
        this.platformArrDistance = -450;
        this.gapBetween = 200;
        this.isGameOver = false;
        this.audio = new Audio ("dark-souls-_you-died_-sound-effect-from-youtube.mp3");
    }

    //methods



    makeItRain = () => {
       
        let lastIx = this.coinsArr.length - 1;
        let lastItem = this.coinsArr[lastIx];
        if (lastItem.y === this.itemsDist ) {
            let randomPos = Math.random() * (canvas.width - 30) + 15
            let itemOne = new Item(randomPos)
            this.coinsArr.push(itemOne);
        } else if (lastItem.y > this.itemsDist + 10 ) {
            let randomPos = Math.random() * (canvas.width - 30) + 15
            let itemOne = new Item(randomPos)
            this.coinsArr.push(itemOne);}
        }

    addPlatforms = () => {

        let lastIndex = this.platformArr.length - 1;
        let lastPlatform = this.platformArr[lastIndex];
        if (lastPlatform.x === this.platformArrDistance) {    
            let platformA = new Platform()
            this.platformArr.push(platformA);
        }
    }


    gameover = () => {
        //stop the game
        this.isGameOver = true;
        // hide canvas
        canvas.style.display = "none";
        //showrestart
        gameoverScreen.style.display = "flex";
        //add audio
        this.audio.play();
    }



    //gameloop
    gameLoop = () => {

        //1. clear the canvas 

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        //2. movements and changes on elements

        this.dude.dudeGravity(); 

        this.addPlatforms();
        this.platformArr.forEach((platform) => {
            platform.movePlatform()
        });

        
        this.coinsArr.forEach((eachItem) => {
            eachItem.itemsMove();
        })
        this.makeItRain();
        

        this.coinsArr.forEach((coin, i) => {
            this.dude.dudeCoinCollision(coin, i);
        })
      this.platformArr.forEach( (platform) => {
            if (this.dude.dudePlatfromCollision(platform)) {
                this.gameover();
                }
         } ) 

        //3. drawing the elements

        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

        this.dude.drawDude();

        this.platformArr.forEach((platform) => {
            platform.drawPlatform()
        })

        this.coinsArr.forEach((eachItem) => {
            eachItem.drawItem();
        })
        this.dude.drawScore();
        //4. animation frame and game logic changes 
        if (!this.isGameOver) {
            requestAnimationFrame(this.gameLoop)
        }; 

    }

}
    
