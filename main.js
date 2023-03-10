var mouseevent="empty";
var last_position_of_x , last_position_of_y;
var last_position_of_touch_x , last_position_of_touch_y
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
var width=1;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("colorInput").value;
    width=document.getElementById("widthInput").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseevent=mouseup;
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){

mouseevent=mouseleave;
}
canvas.addEventListener(mousemove,my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x= e.clientX-canvas.offsetleft;
current_position_of_mouse_y= e.clientY-canvas.offsetTop; 

if(mouseevent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x , last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("touchstart" , my_touchstart)
function my_touchstart(e){
last_position_of_touch_x= e.touches[0].clientX-canvas.offsetleft;
last_position_of_touch_y= e.touches[0].clientY-canvas.offsettop;
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetleft;
current_position_of_touch_y=e.touches[0].clientY - canvas.offsettop;
ctx.beginPath();
ctx.strokeStyle - color;
ctx.lineWidth - width_of_line;
ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);

last_position_of_touch_x = current_position_of_touch_x;
last_position_of_touch_y = current_position_of_touch_y;
}

