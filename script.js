const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "midias/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    const gameOverImage = document.createElement("img");
    gameOverImage.src = "midias/game_over_PNG15.png";
    gameOverImage.alt = "Game Over";
    gameOverImage.classList.add("game-over");
    document.querySelector(".game-board").appendChild(gameOverImage);

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
