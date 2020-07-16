document.getElementById("box").onmouseover = function() {mouseOver()};
document.getElementById("box").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("box").style.background = "red";
}

function mouseOut() {
  document.getElementById("box").style.background = "black";
}
