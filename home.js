var canvas = document.getElementById('drawingCanvas');
var ctx = canvas.getContext('2d');
 
var painting = document.getElementById('paintDiv');
var paint_style = getComputedStyle(painting);
canvas.width = screen.width
canvas.height=screen.height

var mouse = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);
/*canvas.addEventListener('touchmove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);*/

ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';
var startx=0;
var startY=0;
canvas.addEventListener('touchmove', function(e){
        var touchobj = e.touches[0] // reference first touch point for this event
        mouse.x=parseInt(touchobj.clientX)
        mouse.y=parseInt(touchobj.clientY)
        //var dist = parseInt(touchobj.clientX) - startx
        //statusdiv.innerHTML = 'Status: touchmove<br> Horizontal distance traveled: ' + dist + 'px'
        e.preventDefault()
    }, false)
    
canvas.addEventListener("touchstart", function(e){
    ctx.beginPath();
    var touchobj = e.touches[0] // reference first touch point (ie: first finger)
    startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
    starty = parseInt(touchobj.clientY)
    //e.preventDefault()
    mouse.x=startx
    mouse.y=starty
    ctx.moveTo(mouse.x, mouse.y);
}, false);

 
canvas.addEventListener('touchend', function() {
    //canvas.removeEventListener('touchmove', onPaint, false);
}, false);


canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};
