class Dude {
  //properites
  constructor() {
    this.dudeImage = new Image();
    this.dudeImage.src = "./img/Dude_Monster.png";
    this.width = 100;
    this.height = 100;
    this.x = canvas.width / 2.5;
    this.y = canvas.height / 1.3;
    this.speedX = 0;
    this.speedY = 5;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.isJumping = false;
    this.isFalling = false;
    this.isDown = true;
    this.rightPressed = false;
    this.leftPressed = false;
    this.coinCollected = 0;
  }

  //methods

  drawScore = () => {
    ctx.font = "30px Verdana";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + this.coinCollected, 10, 30);
  };

  drawDude = () => {
    ctx.drawImage(this.dudeImage, this.x, this.y, this.width, this.height);
  };

  dudeGravity = () => {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;

    if (this.y + this.height < canvas.height) {
      this.y += this.speedY + this.gravity;
    } else {
      this.y += 0;
    }
  };

  dudeBorderCollision = () => {
    if (this.x >= canvas.width) {
      this.x === canvas.width;
    }
  };

  dudeCoinCollision = (coin, index) => {
    if (coin.y > this.y && coin.x > this.x && coin.x < this.x + this.width) {
      if (this.y <= canvas.height / 1.3 && game.coinsArr.splice(index, 1)) {
        this.coinCollected += 2;
        console.log(this.coinCollected);
      } else if (game.coinsArr.splice(index, 1)){
        this.coinCollected += 1;
        console.log(this.coinCollected);
      }
    }
  }; 

  dudePlatfromCollision = (platfrom) => {
    if (
      this.x < platfrom.x + platfrom.width &&
      this.x + this.width > platfrom.x &&
      this.y < platfrom.y + platfrom.height &&
      this.height + this.y > platfrom.y
    ) {
      return true;
    } else {
      return false;
    }
  };

  keyDown = (event) => {
    let button = event.code;
    if (button === "ArrowRight") {
      this.x += 10;
      if (this.x + this.width > canvas.width) {
        this.x = canvas.width - this.width;
      }
    } else if (button === "ArrowLeft") {
      this.x -= 10;
      if (this.x < 0) {
        this.x = 0;
      }
      // this.leftPressed = true;
    } else if (button === "Space") {
      if (this.isDown) {
        this.isJumping = true;
        this.movement();
      }
    }
  };

  movement = () => {
    if (this.isJumping) {
      this.y -= 180;
    }
    if (this.isFalling) {
      this.y += 220;
    }
  };
}
