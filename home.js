var canvas = document.getElementById('drawingCanvas');
var ctx=canvas.getContext("2d");
canvas.width = screen.width;
canvas.height=3300;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
var mode="pen";

var lastX;
var lastY;
var strokeColor="red";
var strokeWidth=5;
var mouseX;
var mouseY;
var canvasOffset=$("#drawingCanvas").offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
var isMouseDown=false;

function clearCanvas(){

    console.log("Trying to clear the canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


}
function cancelSave(){
    console.log("Cancelling save");
    var bar=document.getElementById("bar");
    bar.style.display="block";
    var cancelButton=document.getElementById("cancelSave");
    cancelButton.style.display="none";
}
function beginSave(){
    console.log("Trying to save");

    var bar=document.getElementById("bar");
    //bar.id="savingNav";
    bar.style.display="none";
    var cancelButton=document.getElementById("cancelSave");
    cancelButton.style.display="inline-block";
    window.print();
}
function changeRed(){
    penMode();
    ctx.strokeStyle="#d80000"

}
function changeBlack(){
    penMode();

    ctx.strokeStyle="#000000"
}
function changeBlue(){
    penMode();

    ctx.strokeStyle="#00008b"
}
function changeOrange(){
    penMode();

    ctx.strokeStyle="#FFA500"
}
function changeGreen(){
    penMode();

    ctx.strokeStyle="#3FD348"
}
function changePurple(){
    penMode();

    ctx.strokeStyle="#A21FC6"
}


function handleMouseDown(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  ctx.lineWidth = parseInt(document.getElementById("thicknessField").value, 10);
  console.log(parseInt(document.getElementById("thicknessField"), 10))

  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
  lastX=mouseX;
  lastY=mouseY;
  isMouseDown=true;
}
function worksheet(){
    canvas.height=4950;
    canvas.id="worksheetCanvas";
}
function dailyWork(){
    canvas.height=3300;
    canvas.id='learningCanvas';
}

function handleMouseUp(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mouseup stuff here
  isMouseDown=false;
}

function handleMouseOut(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mouseOut stuff here
  isMouseDown=false;
}

function handleMouseMove(e){
    console.log("Mouse is moving");
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mousemove stuff here
  if(isMouseDown){
    if(mode=="pen"){
      ctx.globalCompositeOperation="source-over";
      ctx.moveTo(lastX,lastY);
      ctx.lineTo(mouseX,mouseY);
      ctx.stroke();     
    }else{
      ctx.globalCompositeOperation="destination-out";
      //ctx.arc(lastX,lastY,8,0,Math.PI*2,false);
      ctx.lineTo(mouseX, mouseY);
      ctx.fill();
    }
    lastX=mouseX;
    lastY=mouseY;
  }
}
function eraseMode(){
    mode="erase"
}
function penMode(){
    mode="pen"
}
$("#drawingCanvas").mousedown(function(e){handleMouseDown(e);});
$("#drawingCanvas").mousemove(function(e){handleMouseMove(e);});
$("#drawingCanvas").mouseup(function(e){handleMouseUp(e);});
$("#drawingCanvas").mouseout(function(e){handleMouseOut(e);});

var mode="pen";
