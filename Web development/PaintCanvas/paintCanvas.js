let paintcanvas = document.getElementById("canvas1");
let context = paintcanvas.getContext("2d");
let color = 'black';
let radius = 10;
document.getElementById("sizeOutput").innerHTML=radius;
// only paint if mouse is being dragged (moved while the button is pressed)
let isPainting = false;

function setWidth (value) {
 //let value= document.getElementById("width");
if(isNumeric(value)===true){
  paintcanvas.width=value
}
}
function setHeight (value) {
    //let value= document.getElementById("width");
   if(isNumeric(value)===true){
     paintcanvas.height=value
     
   }
   }
function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle =this.color;
    context.fill();
}

// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}
function startPaint(){
   this.isPainting = true;
}
function endPaint(){
   this.isPainting=false;
}
function doPaint(x,y){
    if(this.isPainting===true){
        paintCircle(x,y);
    }
}
function changeColor(newColor){
    this.color=newColor;
}
function resizeBrush(newSize){
this.radius=newSize;
document.getElementById("sizeOutput").innerHTML=this.radius;
}
