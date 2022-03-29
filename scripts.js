const dino = document.getElementById("personagem");
const cacto = document.getElementById("obstaculo");

function salto() {
  if (dino.classList != "salto") {
    dino.classList.add("salto");

    setTimeout(function () {
      dino.classList.remove("salto");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  
  if (cactoLeft < 50 && cactoLeft > 0 && dinoTop >= 140) {
   
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  salto();
});