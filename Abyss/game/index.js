const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let prevTime = 0;

canvas.width = 1024
canvas.height = 576



const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
}

const background1 = new Image()
background1.src = 'fundo.gif'

// const player1 = new Image()
// player1.src = 'moleton.png'

const gravity = 0.8;




class sprite {
    constructor(image, {
        position,
        velocity,
        dimensions,

    }) {
        this.position = position
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.image = image;
        this.velocity = velocity


    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);

        ctx.fillStyle('red')
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }

    update() {
        this.draw()

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;


        if (this.position.y + this.height >= canvas.height - 96) {
            this.velocity.y = canvas.height - (this.position.y + this.height)
        } else {
            this.velocity.y += gravity

        }
    }
}

const background = new sprite(background1, {
    position: {
        x: 0,
        y: 0
    },
    dimensions: {
        width: 1024,
        height: 576
    },

})

const player = new sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    dimensions: {
        width: 100,
        height: 100
    }

})

function animate() {
    window.requestAnimationFrame(animate)

    let delta = (performance.now() - prevTime) / 1000;
    let fps = 1 / delta;



    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();

    player.draw();
    player.update();



    /*  if (keys.d.pressed) {
          player.switchSprite('Run')
          player.velocity.x = 2
          player.lastDirection = 'right'
          player.shouldPanCameraToTheLeft({
              canvas,
              camera
          })
      } else if (keys.a.pressed) {
          player.switchSprite('RunLeft')
          player.velocity.x = -2
          player.lastDirection = 'left'
          player.shouldPanCameraToTheRight({
              canvas,
              camera
          })
      } else if (player.velocity.y === 0) {
          if (player.lastDirection === 'right') player.switchSprite('Idle')
          else player.switchSprite('IdleLeft')
      }

      if (player.velocity.y < 0) {
          player.shouldPanCameraDown({
              camera,
              canvas
          })
          if (player.lastDirection === 'right') player.switchSprite('Jump')
          else player.switchSprite('JumpLeft')
      } else if (player.velocity.y > 0) {
          player.shouldPanCameraUp({
              camera,
              canvas
          })
          if (player.lastDirection === 'right') player.switchSprite('Fall')
          else player.switchSprite('FallLeft')
      } */

}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'w':
            player.velocity.y = -4
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
    }
})