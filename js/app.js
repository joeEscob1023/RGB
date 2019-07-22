const jumbotron = document.querySelector(".jumbotron");
const body = document.querySelector("body");
let colors = document.querySelectorAll(".colors");

const button = document.querySelector(".btn");

//This function just sets the jumbotron change colors randomly
function getRandomColor() {
  let letters = "0123456789ACBDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Allows the jumbotron to change colors randomly. color / per second
function colorChange() {
  jumbotron.style.backgroundColor = getRandomColor();
}
setInterval(colorChange, 1000);

/*
  When the user adds a number value to the the inputs, it will change the rgb color on submit
*/
button.addEventListener("click", e => {
  //if the colors value is greater than 255, error message
  let rgbVals = [];
  colors.forEach(function(color) {
    if (color.value <= 255 && color.value >= 0 && color.value !== NaN) {
      rgbvaleus = rgbVals.push(color.value);

      body.style.backgroundColor = `rgb(${rgbVals[0]}, ${rgbVals[1]}, ${
        rgbVals[2]
      })`;
    } else {
      color.style.border = "red 3px solid";
      console.log("fail");
    }
  });
  e.preventDefault();
});
