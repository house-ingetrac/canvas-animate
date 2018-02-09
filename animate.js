var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var toggle = false;
var x = 300;
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
    
    draw();
    
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

c.addEventListener("click", bounce);
toggled.addEventListener("click", toggler);
stopped.addEventListener("click", stopper);
