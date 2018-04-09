var css = document.querySelector("h3");

 

var body = document.querySelector("body");
var direction = document.getElementById("direction");
var button = document.getElementById("button");
var colorPickers = document.querySelector(".colorPickers");
var colors = colorPickers.children;

function changeBackground(){
    body.style.background = "linear-gradient(" + direction.value + colorsValue() + ")";
    css.textContent = body.style.background + ";";
}
direction.addEventListener("change", changeBackground);
colorPickers.addEventListener("input", changeBackground);



function createColor3(){
    var color3 = document.createElement("input");
    colorPickers.appendChild(color3);
    color3.setAttribute("type", "color");
    color3.setAttribute("value", "#4b0082");
}



button.addEventListener("click", createColor3);

function colorsValue(){
    var colorsValueList = ''
  for (i=0; i<colors.length; i++){
    colorsValueList += ", " + colors[i].value
  }
  return colorsValueList
  }
