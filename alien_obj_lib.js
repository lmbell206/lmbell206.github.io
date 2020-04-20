// this library contains objects to be added to the aliens{} array.
//  they include variables for location and movement tracking
//  they also include functions for drawing and movement logic



//BASIC ALIEN OBJECT
//SQUARE THAT MOVES BACK AND FORTH AND THEN DOWN


var fastcupcake = document.getElementById('fast_cupcake_graphic');
var slowcupcake = document.getElementById('slow_cupcake_graphic');
var orange = document.getElementById('orange_graphic');
var chocolatecake = document.getElementById('chocolatecake_graphic');
var almostdefeatedeyes = document.getElementById('almostdefeated_graphic');
var bosscake = document.getElementById('boss_graphic');
var goingtoshoot = document.getElementById('goingtoshoot_graphic');
var gothit = document.getElementById('gothit_graphic');
var regular = document.getElementById('regular_graphic');


function alien_obj(x,y,color,size, horizontal_distance, vertical_distance) {
	this.id = "alien";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.horizontal_distance = horizontal_distance;
	this.vertical_distance = vertical_distance;
	this.horizontal_speed = 3;
	this.vertical_speed = 5;
	this.lcount = 0;
	this.rcount = 0;
	this.dcount = 0;
	this.sizetarget = size;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		} else if (this.lcount < this.horizontal_distance) {
			this.x = this.x - this.horizontal_speed;
			this.lcount = this.lcount + 1;
		} else if (this.dcount < this.vertical_distance) {
			this.y = this.y + this.vertical_speed;
			this.dcount= this.dcount + 1;
		} else if (this.rcount < this.horizontal_distance) {
			this.x = this.x + this.horizontal_speed;
			this.rcount = this.rcount + 1;
		} else if (this.dcount < this.vertical_distance + 5) {
			this.y = this.y + this.vertical_speed;
			this.dcount = this.dcount + 1;
		} else {
			this.lcount = 0;
			this.rcount = 0;
			this.dcount = 0;
		}
		if (this.x < 0) {
			this.x = 0;
			this.rcount = 0;
			this.lcount = this.horizontal_distance;
		}
		if (this.x > 960 - this.size) {
			this.x = 960 - this.size;
			this.lcount = 0;
			this.rcount = this.horizontal_distance;
		}
	};
	this.draw = function() {
		ctx.drawImage(fastcupcake, this.x , this.y , this.size , this.size)
	};
}

//TRIANGLE OBJECT
//MOVES DOWN AT AN ANGLE BACK AND FORTH
function triangle_obj(x,y,color,size, horizontal_distance, vertical_distance) {
	this.id = "triangle";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.horizontal_distance = horizontal_distance;
	this.vertical_distance = vertical_distance;
	this.horizontal_speed = 2;
	this.vertical_speed = .3;
	this.lcount = 0;
	this.rcount = 0;
	this.dcount = 0;
	this.sizetarget = size;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		}
		if (this.lcount < this.horizontal_distance) {
			this.x = this.x - this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.lcount = this.lcount + 1;
		} else if (this.rcount < this.horizontal_distance) {
			this.x = this.x + this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.rcount = this.rcount + 1;
		} else {
			this.lcount = 0;
			this.rcount = 0;
			this.dcount = 0;
		}
		if (this.x < 0) {
			this.x = 0;
			this.rcount = 0;
			this.lcount = this.horizontal_distance;
		}
		if (this.x > 960 - this.size) {
			this.x = 960 - this.size;
			this.lcount = 0;
			this.rcount = this.horizontal_distance;
		}
	};
	this.draw = function() {
		ctx.drawImage(slowcupcake, this.x , this.y , this.size , this.size)
	};
}


// FLOWER OBJECT
//  MOVES STRAIGHT DOWN SLOWLY
//  INCREASES IN SIZE OVER TIME
// shoots missles
function flower_obj(x,y,color,size) {
	this.id = "flower";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.dcount = 0;
	this.sizetarget = size;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		}
		if (this.dcount < 10) {
			this.y = this.y + 3;
			this.size = this.size + 1;
		}
		this.dcount = this.dcount + 1;
		if (this.dcount > 150) {
			items[items.length]= new Missle_obj(this.x+(this.size/2),this.y);
			this.dcount = 0;
		}
	};
	this.draw = function() {
		ctx.drawImage(orange, this.x , this.y , this.size , this.size);
	};
}

function cherry_obj(x,y,droptime) {

}

function chocolatecake_obj(x,y,color,size, horizontal_distance, vertical_distance) {
	this.id = "chocolatecake";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.horizontal_distance = horizontal_distance;
	this.vertical_distance = vertical_distance;
	this.horizontal_speed = 3;
	this.vertical_speed = .5;
	this.lcount = 0;
	this.rcount = 0;
	this.dcount = 0;
	this.sizetarget = size;
	this.shootfrequency = 50;
	this.shoottimer = 0;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		}
		if (this.lcount < this.horizontal_distance) {
			this.x = this.x - this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.lcount = this.lcount + 1;
		} else if (this.rcount < this.horizontal_distance) {
			this.x = this.x + this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.rcount = this.rcount + 1;
		} else {
			this.lcount = 0;
			this.rcount = 0;
			this.dcount = 0;
		}
		if (this.x < 0) {
			this.x = 0;
			this.rcount = 0;
			this.lcount = this.horizontal_distance;
		}
		if (this.x > 960 - this.size) {
			this.x = 960 - this.size;
			this.lcount = 0;
			this.rcount = this.horizontal_distance;
		}
		this.shoottimer = this.shoottimer + 1;
		if (this.shoottimer == this.shootfrequency){
			items[items.length]= new Missle_obj(this.x+(this.size/2),this.y);
			this.shoottimer = 0;
		}
	};
	this.draw = function() {
		ctx.drawImage(chocolatecake, this.x , this.y , this.size , this.size)
	};
}

function boss_obj(){
	this.id = "bosscake";
	this.x = 480;
	this.y = 0;
	this.health = 150;
	this.color = 'blue';
	this.size = 150;
	this.horizontal_distance = 960;
	this.vertical_distance = 0;
	this.horizontal_speed = 2;
	this.vertical_speed = 0;
	this.lcount = 0;
	this.rcount = 0;
	this.dcount = 0;
	this.sizetarget = 150;
	this.shootfrequency = 90;
	this.shoottimer = 0;
	this.eyes = regular;

	this.move = function() {
		if (this.lcount < this.horizontal_distance) {
			this.x = this.x - this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.lcount = this.lcount + 1;
		} else if (this.rcount < this.horizontal_distance) {
			this.x = this.x + this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.rcount = this.rcount + 1;
		} else {
			this.lcount = 0;
			this.rcount = 0;
			this.dcount = 0;
		}
		if (this.x < 0) {
			this.x = 0;
			this.rcount = 0;
			this.lcount = this.horizontal_distance;
		}
		if (this.x > 960 - this.size) {
			this.x = 960 - this.size;
			this.lcount = 0;
			this.rcount = this.horizontal_distance;
		}
		this.shoottimer = this.shoottimer + 1;
		if (this.shoottimer == 60){
			this.eyes = goingtoshoot;
		}
		if (this.shoottimer == this.shootfrequency){
			items[items.length]= new Missle_obj(this.x+(this.size/2),this.y);
			this.shoottimer = 0;
			this.eyes = regular;
		}
	}
	this.draw = function() {
		ctx.drawImage(bosscake, this.x , this.y , this.size , this.size);
		ctx.drawImage(this.eyes, this.x+(this.size/2.5), this.y+(this.size/5), this.size/6, this.size/6);
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x,this.y+this.size+10,this.health,20);
	};

	this.gethit = function() {
		this.health = this.health - 5;
		this.eyes = gothit;
		if (this.health < 1){
			victory();
		}
	}
}
