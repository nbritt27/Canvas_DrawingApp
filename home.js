/*PDFJS.getPdf('YVC_flyer.pdf', function getPdfHelloWorld('YVC_flyer.pdf') {
    //
    // Instantiate PDFDoc with PDF data
    //
    var pdf = new PDFJS.PDFDoc("YVC_flyer");
    var page = pdf.getPage(1);
    var scale = 1.5;
   
    //
    // Prepare canvas using PDF page dimensions
    //
    
    canvas.height = page.height * scale;
    canvas.width = page.width * scale;
   
    //
    // Render PDF page into canvas context
    //
    page.startRendering(ctx);
  });*/
/*var pdf = new PDFObject({
    url: "https://www.anderson1.k12.sc.us/cms/lib/SC01000609/Centricity/Domain/1123/Percent_Yield.pdf",
    id: "pdfRendered",
    pdfOpenParams: {
      view: "FitH"
    }
  }).embed("paintDiv");*/

function beginSave(){
    var bar=document.getElementById("bar");
    bar.style.display="none";
}
var backgroundColor="#ffffff";
var canvas = document.getElementById('drawingCanvas');
var ctx = canvas.getContext('2d');
var painting = document.getElementById('paintDiv');
var paint_style = getComputedStyle(painting);
canvas.width = screen.width
canvas.height=screen.height

var mouse = {x: 0, y: 0};
function eraseDrawings(){
    console.log("using eraser tool");
    ctx.strokeStyle=backgroundColor;
    
}
function clearCanvas(){

    console.log("Trying to clear the canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


}
function changeRed(){
    ctx.strokeStyle="#d80000"

}
function changeBlack(){
    ctx.strokeStyle="#000000"
}
function changeBlue(){
    ctx.strokeStyle="#00008b"
}
function changeOrange(){
    ctx.strokeStyle="#FFA500"
}
function changeGreen(){
    ctx.strokeStyle="#3FD348"
}
function changePurple(){
    ctx.strokeStyle="#A21FC6"
}
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);
/*canvas.addEventListener('touchmove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);*/
if(document.getElementById("thicknessField")!=null){
    ctx.lineWidth = parseInt(document.getElementById("thicknessField").value, 10);

}
else{
    ctx.lineWidth=3;
}
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';
var startx=0;
var startY=0;
canvas.addEventListener('touchmove', function(e){
        var touchobj = e.touches[0] // reference first touch point for this event
        mouse.x=parseInt(touchobj.clientX)-this.offsetLeft;
        mouse.y=parseInt(touchobj.clientY)-this.offsetTop;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        //ctx.moveTo(mouse.x, mouse.y)
        //var dist = parseInt(touchobj.clientX) - startx
        //statusdiv.innerHTML = 'Status: touchmove<br> Horizontal distance traveled: ' + dist + 'px'
        e.preventDefault()
    }, false)
    
canvas.addEventListener('touchstart', function(e) {
      ctx.lineWidth = parseInt(document.getElementById("thicknessField").value, 10);

      ctx.beginPath();		
      var touchobj = e.touches[0] // reference first touch point (ie: first finger)
      startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser		      
      starty = parseInt(touchobj.clientY)		      
      mouse.x=startx		      
      mouse.y=starty	

      ctx.moveTo(mouse.x, mouse.y);		      
      e.preventDefault()		      

     //canvas.addEventListener('touchmove', onPaint, false);		 +
 }, false);

 
canvas.addEventListener('touchend', function() {
    
    canvas.removeEventListener('touchmove', onPaint, false);
}, false);


canvas.addEventListener('mousedown', function(e) {
    ctx.lineWidth = parseInt(document.getElementById("thicknessField").value, 10);
    console.log(parseInt(document.getElementById("thicknessField"), 10))

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
