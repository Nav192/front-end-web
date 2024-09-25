// window element
window.addEventListener('load', ()=>{

    resize();// Resizes the canvas once the window loads
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
});

// declare variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); // canvas for 2 dimensional operations
let coord = {x:0 , y:0}; // Stores the initial postion of the cursor
let paint = false; // trigger drawing

// resizes the canvas to the avalilable size of the window.
function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.heigth = window.innerHeight;
}

// Updates the coordinates of the cursor
function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

// start and stop drawing
function startPainting(event) {
    paint = true;
    getPosition(event);
}
function stopPainting() {
    paint = false;
}

function sketch(event) {
    if (!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 5;
    // Sets round shape.
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'green';
    // The cursor to start drawing moves to this coordinate.
    ctx.moveTo(coord.x, coord.y);
    // The position of the cursor gets updated as we move the mouse around.
    getPosition(event);
    // A line is trackes from start coordinate to this coordinate
    ctx.lineTo(coord.x , coord.y);
    // Draws the line.
    ctx.stroke();
}