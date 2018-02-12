var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var logo = new Image();
logo.src = "/logo.jpg";
//logo.height = 20;
//logo.width = 40;

var toggle = false;
var x = 150;
var y = 300;
var xdir = 1;
var ydir = 1;
var id = 0;

var toggled = document.getElementById("toggle");
var stopped = document.getElementById("stop");

var stopper = function(){
    window.cancelAnimationFrame(id);
}

var toggler = function(e){
    if(toggle){
	toggle=false;
    }
    else{
	toggle=true;
    }
}

var bounce = function(e){
    //window.cancelAnimationFrame(id);
    if(x>=600){
	xdir = -1*xdir;
    }
    if(y>=600){
	ydir = -1*ydir;
    }
    if(x<=0){
	xdir = -1*xdir;
    }
    if(y<=0){
	ydir = -1*ydir;
    }
    x += 3 * xdir;
    y += 3 *  ydir;
    
    //display image;
    ctx.drawImage(logo, x, y, 40, 20);
    
    id =  window.requestAnimationFrame(bounce);
    
}

var draw = function(){
	ctx.clearRect(0, 0, 600, 600);
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2*Math.PI);
	ctx.fill();
}

var stop = function(){
    window.cancelAnimationFrame(id);
}

//c.addEventListener("click", grower);
toggled.addEventListener("click", bounce);
stopped.addEventListener("click", stopper);
