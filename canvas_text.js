var canvas = document.getElementById("drawingCanvas"),
    textarea = null;

function mouseDownOnTextarea(e) {
    var x = textarea.offsetLeft - e.clientX,
        y = textarea.offsetTop - e.clientY;
    function drag(e) {
        textarea.style.left = e.clientX + x + 'px';
        textarea.style.top = e.clientY + y + 'px';
    }
    function stopDrag() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}
canvas.addEventListener('click', function(e) {
    if (!textarea) {
        textarea = document.createElement('TEXTAREA');
        textarea.className = 'info';
        textarea.addEventListener('mousedown', mouseDownOnTextarea);
        document.body.appendChild(textarea);
    }
    var x = e.clientX - canvas.offsetLeft,
        y = e.clientY - canvas.offsetTop;
    textarea.value = "x: " + x + " y: " + y;
    textarea.style.top = e.clientY + 'px';
    textarea.style.left = e.clientX + 'px';
}, false);​
