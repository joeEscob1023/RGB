const jumbotron = document.querySelector(".jumbotron");
const body = document.querySelector("body");
let colors = document.querySelectorAll(".colors");
const button = document.querySelector(".btn");

setInterval(() => {
  jumbotron.style.backgroundColor = getRGBVal();
}, 1000);

//limit values to 0<>256
colors.forEach(function(color) {
  color.addEventListener("keyup", e => {
    console.log("e.target.value: ", e.target.value);
    color.value = minmax(color.value, 0, 256);
  });
});

button.addEventListener("click", e => {
  e.preventDefault();
  let rgbValsArr = [];
  let allValsOk = true;
  //if the colors value is greater than 255, error message
  colors.forEach(function(color) {
    let num = color.value;
    if (isNaN(num) || num == "") {
      allValsOk = false;
    } else {
      rgbValsArr.push(num);
    }
    console.log("TCL: allValsOk", allValsOk);
    console.log("TCL: num", num);
  });

  let rgbResultString = "";
  if (allValsOk && rgbValsArr.length == 3) {
    rgbResultString = `rgb(${rgbValsArr[0]},${rgbValsArr[1]},${rgbValsArr[2]})`;
  } else {
    alert("error!please make sure all 3 fields have a value between 0 and 256");
  }

  console.log(rgbResultString);
});

function minmax(value, min, max) {
  if (parseInt(value) < min || isNaN(parseInt(value))) return min;
  else if (parseInt(value) > max) return max;
  else return value;
}

function getRGBVal() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
