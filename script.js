document.getElementById("box").onmouseover = function() {mouseOver()};
document.getElementById("box").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("box").style.backgroundColor = "red";
}

function mouseOut() {
  document.getElementById("box").style.backgroundColor = "black";
}
function changeColour(box) {
    // start
    document.body.style.backgroundColor = box;
    // end
}