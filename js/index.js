// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };
const img = new Image();
img.src = "../images/road.png";

let canvas, ctx;

img.onload = function () {
  // Create background canvas
  backgroundCanvas = document.getElementById("canvas");
  ctx = backgroundCanvas.getContext("2d");

  updateBackgroundCanvas();
};

const backgroundImage = {
  img: img,
  x: 0,
  y: 0,
  speed: 50,

  move: function () {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, this.y, 500, 700);
  },
};

function updateBackgroundCanvas() {
  backgroundImage.move();
  backgroundImage.draw(this.img, this.x, this.y, 500, 700);

  requestAnimationFrame(updateBackgroundCanvas);
}

const img2 = new Image();
img2.src = "../images/car.png";

window.addEventListener("load", () => {
  let fireballX = 0;
  let x = 0;
  function draw(x, y) {
    ctx.drawImage(img2, 225, 620, 50, 80);
  }

  // Invoca a draw a cada 10 milisegundos, e incrementa o contador da posição x da imagem
  setInterval(() => {
    draw(fireballX, fireballX);
    fireballX = 0;
  }, 0.00000001);
});

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowRight":
      return (x += 1);

    case "ArrowLeft":
      return (game.img2.speedX = -2);
  }
  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
    game.player.speedY = 0;
  });
});
