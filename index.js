/**@type{HTMLCanvasElement} */

const circle = document.getElementById("circle");
const circleLeft = document.getElementById("circleLeft");
const circleRight = document.getElementById("circleRight");

circleLeft.style.left = window.innerWidth * 0.2 + "px";
circleRight.style.left = window.innerWidth * 0.8 + "px";
function animation() {
  setInterval(() => {
    circle.style.left =
      window.innerWidth / 2 +
      Math.sin(new Date().getTime() / 1000) * window.innerWidth * 0.3 +
      "px";
  }, 30);
}
animation();
