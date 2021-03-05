var gravity = -9.81
var x_lim = 500
var y_lim = 500
var z_lim = 6
var total_drop = 100
var drips = []
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

class Droplet{
	constructor(){
		this.x = (Math.random() * x_lim).toFixed(2);
		this.y = (Math.random() * y_lim -1).toFixed(2) ;
		this.z = Math.floor(Math.random() * z_lim) +1;
	}

	update(){
		if(this.y > y_lim){
			this.x = (Math.random() * x_lim).toFixed(2);
			this.y = -10;
			this.z = Math.floor(Math.random() * z_lim) +1;
			splash(this.x,this.y,this.z);
		}
		this.y = this.y - gravity*((this.z*2) / z_lim);
	}
}

function draw(drops, ctx){
	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
	ctx.fillStyle = "rgba(39, 35, 30, 1)";
	ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height)
	for(elem of drops){
		ctx.beginPath();
		ctx.arc(window.innerWidth * elem.x/x_lim, window.innerHeight * elem.y/y_lim, elem.z, 0, 2 * Math.PI, false);
		ctx.fillStyle = "rgba(101, 90, 255, 0.9)";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(window.innerWidth * elem.x/x_lim, window.innerHeight * elem.y/y_lim, elem.z*0.6, 0, 2 * Math.PI, false);
		ctx.fillStyle = "rgba(33, 31, 30, 0.75)";
		ctx.fill();
		elem.update()
	}
}

function run(){
	drips = [new sound('drips/0.mp3'),
		new sound('drips/1.mp3'),
		new sound('drips/2.mp3'),
		new sound('drips/3.mp3'),
		new sound('drips/4.mp3'),
		new sound('drips/5.mp3'),
		new sound('drips/6.mp3')]
	var ctx = document.getElementById('cv')
	ctx.width = window.innerWidth;
	ctx.height = window.innerHeight;
	ctx = ctx.getContext("2d");
	
	var drops = [];
	for(var i=0; i < total_drop; i++){
		drops.push(new Droplet);
	}
	
	var interval = setInterval(function(){
		draw(drops, ctx);
	},20);
}

function splash(x,y,z){
	var tmp = Math.floor(Math.random() *7)
	drips[tmp].play()
}

