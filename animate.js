var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var toggle = false;
var line = false;
var x = c.offsetX;
var y = c.offsetY;

var toggled = document.getElementById("toggle");
var cleared = document.getElementById("clear");
var lined =  document.getElementById("line");

var clearer = function(e){
    e.preventDefault();
    ctx.closePath();
    ctx.beginPath();
    ctx.clearRect(0,0,600,600);
}

var toggler = function(e){
    if(toggle){
	toggle=false;
    }
    else{
	toggle=true;
    }
}

var liner = function(e){
    if(line){
	line=false;
    }
    else{
	line=true;
    }
}

var draw = function(e){
    if(toggle){
	if(x>=600){
	    xdir = -1*xdir;
	}
	if(y>=600){
	    ydir = -1*ydir;
	}
	if(x<=600){
	    xdir = -1*xdir;
	}
	if(y<=600){
	    ydir = -1*ydir;
	}
	x = x + xdir;
	y = y + ydir;
    }
    else{
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2*Math.PI);
	ctx.fill();
	x+=1;
    }
    window.requestAnimationFrame(draw);
}



c.addEventListener("click", draw);
toggled.addEventListener("click", toggler);
cleared.addEventListener("click", clearer);
//lined.addEventListener("click", liner);

/*
fillStyle()
strokeStyle()
clearRect()
fillStyle()
*/
