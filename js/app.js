const jumbotron = document.querySelector(".jumbotron");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
const button = document.querySelector(".btn");

function getRandomColor() {
  let letters = "0123456789ACBDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorChange() {
  jumbotron.style.backgroundColor = getRandomColor();
}
setInterval(colorChange, 1000);

button.addEventListener("click", e => {
  //if the colors value is greater than 255, error message
  e.preventDefault();
});
