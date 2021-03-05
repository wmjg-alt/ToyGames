function run(){
	var G = new Game
}
class Game{
	constructor(){
		this.instr = document.getElementById('top')
		this.wind = document.getElementById('port')
		this.can = document.getElementById('cv')
		this.can.width = port.innerWidth;
		this.can.height = port.innerHeight;
		this.ctx = this.can.getContext("2d");
		this.board = new Array(47);
		for (var i =0; i<this.board.length; i++){
			this.board[i] = new Array(440);
			this.board[i].push('\n');
		}
		this.wind.innerHTML = this.board
		this.player = new Bot(true)
	}
	
}
class Bot{
	constructor(user){
		this.player = user
		if (this.player){console.log('new user generated');}
		else{
			this.instr = "Randomly pick if has a brain, ears, eyes, mouth, 2leg, 2arm, motor skills, energylevel, heart/core,x, y"
		}
		//good eyes let you mouse over other bots and see what they have, displayed at the top
		//2legs let you move faster, 1 leg slower, no legs crawl, no legs or arms -immobile
		//no energy, immobile. energylevel dictates moves every so often (x ticks)
		//brain, can read eye detail, can control direction, 
		//
	}
}