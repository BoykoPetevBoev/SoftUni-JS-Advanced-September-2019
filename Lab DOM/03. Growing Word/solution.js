
function growingWord() {
  let text = document.querySelector("#exercise > p");
  const blueC = document.getElementById("blueDiv");
  const green = document.getElementById("greenDiv").style.backgroundColor;
  const red = document.getElementById("redDiv").style.backgroundColor;

  if (text === null) {
    throw new Error('We need text!');
  }

  text.style.fontSize = newSize();
  text.style.color = newColor();
  
  function newColor() {
    let blue = blueC.style.backgroundColor;
    let currentColor = text.style.color;
    let colors = {
      "": "#5B88BD",
      blue: "#8FF897",
      green: "#A40014",
      red: "#5B88BD"
    }
    return colors[currentColor];
  }
  function newSize() {
    let size = text.style.fontSize;
    let newSize = '';
    if (size === '') {
      newSize = 2;
    }
    else {
      newSize = size.match(/\d+/gmi);
      newSize *= 2;
    }
    return newSize + "px";
  }
}




