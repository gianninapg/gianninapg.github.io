function changeColour(colour) {
    // start
    document.body.style.backgroundColor = colour;
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
    let lightbulb = document.getElementById('light');
    lightbulb.classList.toggle('on');
    // end 
}
