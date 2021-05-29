var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="blue";


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(500,300,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("inputColor").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x= "+mouse_x+" y= "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}