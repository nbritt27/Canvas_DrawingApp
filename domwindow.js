function createText(){
    var element = document.createElement("TEXTAREA");
    //element.style.opacity=0.5;
    //element.style.fontFamily= Arial, Helvetica, sans-serif;

    newWindObj(element,"window-title"); 
}
function deleteTop(i){
    var tempText=document.getElementById(i);
    tempText.style.height="5px";
    console.log("Out of focus");

}
function addTop(i){
    var tempText=document.getElementById(i);
    tempText.style.height="25px";
    console.log("In focus");
}
var totalWind = 0;
function webWind(container, windowTitle){
    totalWind += 1;
    rugg = totalWind.toString();
    //set up DOM
    this.cont = container;
    this.windDiv = document.createElement("DIV");
    
    this.topBar = document.createElement("DIV");

    
    text = document.createTextNode("");
    this.topBar.appendChild(text)
    this.topBar.id="topBar" + totalWind.toString();
    this.topBar.style.opacity=1.0;
    this.cont.style.opacity=1.0;
    this.windDiv.appendChild(this.topBar);
    this.windDiv.appendChild(this.cont);
    document.body.appendChild(this.windDiv);
    //set up CSS
    this.windDiv.style.position = "absolute";
    this.windDiv.style.left = "100px";
    this.windDiv.style.top = "150px";
    this.windDiv.style.border = "1px solid black";
    this.windDiv.style.width = this.cont.width;
    this.windDiv.style.background = "#FFFFFF";
    this.windDiv.id = "windDiv"+totalWind.toString();
    this.windDiv.style.opacity=0.5;
    this.topBar.style.background = "#999999";
    this.topBar.style.height = "15px";
    this.topBar.style.width = this.windDiv.width;
    this.topBar.id = "topBar"+totalWind.toString();
    this.topBar.hasFocus=deleteTop(this.topBar.id);
    this.topBar.onfocus=addTop(this.topBar.id)
    //set up dragging
    this.dragging = false;
    this.relativeLoc = {x:0,y:0};
    
    this.MouseDown1 = function(evt) {
        addTop(this.topBar.id);
        var rect = this.topBar.getBoundingClientRect();
        this.relativeLoc = {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
        this.dragging = true;
        document.body.appendChild(this.windDiv);
        evt.preventDefault();
    };
    this.MouseUp1 = function(evt) {
        deleteTop(this.topBar.id);
        if(this.cont.value==null){
            this.topBar.parentNode.removeChild(this.topBar);
            this.cont.parentNode.removeChild(this.cont);
        }
        this.dragging = false;
    };
    this.MouseMove1 = function(evt){
        if(this.dragging){
            this.windDiv.style.left = (evt.clientX-this.relativeLoc.x).toString()+"px";
            this.windDiv.style.top = (evt.clientY-this.relativeLoc.y).toString()+"px";
        }
    };
    this.TouchStart1 = function(evt){
        evt.preventDefault();
    }
};

function newWindObj(cont, windTitle){
    var tmpWind = new webWind(cont, windTitle);
    tmpWind.topBar.addEventListener("mousedown",function(evt){
        tmpWind.MouseDown1(evt);
    });
    document.addEventListener("mouseup",function(evt){
        tmpWind.MouseUp1(evt);
    });
    document.addEventListener("mousemove",function(evt){
        tmpWind.MouseMove1(evt);
    });
    return tmpWind;
};
