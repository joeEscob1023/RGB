const jumbotron = document.querySelector(".jumbotron");
const body = document.querySelector("body");
let colors = document.querySelectorAll(".colors");
console.log(colors);

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
  colors.forEach(function(color) {
    if (color.value <= 255 && color.value >= 0 && color.value !== NaN) {
      color.style.border = "green 3px solid";
      //loop needs to return something like rgb(54, 98, 245)

      console.log(color.value, color.value, color.value);
    } else {
      color.style.border = "red 3px solid";
      console.log("fail");
    }
  });
  e.preventDefault();
});
