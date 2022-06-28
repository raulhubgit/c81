var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "space gray";

ctx.beginPath();

ctx.strokeStyle = color; 
ctx.lineWidth = 2; 
ctx.arc(200, 200, 40 ,0 , 2 * Math.PI); 
ctx.stroke();

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value; 
    console.log(color);
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log("X = " + mouseX + " ,Y = " + mouseY); 
    circle(mouseX , mouseY);
}
function circle(mouseX , mouseY) { 
    ctx.beginPath(); ctx.strokeStyle = color; 
    ctx.lineWidth = 2; ctx.arc(mouseX, mouseY, 40 ,0 , 2*Math.PI); 
    ctx.stroke(); }
