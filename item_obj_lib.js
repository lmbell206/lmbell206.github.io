//POWER UP LIBRARY
//store objects in items{} array

function Missle_obj(x,y) {
	this.x = x;
	this.y = y;
	this.size = 5;

	this.hurts = true;

	this.move = function() {
		this.y = this.y + 6;
	};

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.fillRect(this.x, this.y, 5, 15);
		ctx.stroke();
	}
}

function Heart_obj(x,y) {
	this.x = x;
	this.y = y;
	this.size = 35;

	this.hurts = false;

	this.move = function() {
		this.y = this.y + 5;
	};

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.fillRect(this.x, this.y, 35, 15);
		ctx.fillRect(this.x+5, this.y, 25, 30);
		ctx.fillRect(this.x + 5, this.y-5, 10, 5);
		ctx.fillRect(this.x + 20, this.y - 5, 10, 5);
		ctx.fillRect(this.x + 30, this.y, 5, 15);
		ctx.fillRect(this.x + 15, this.y + 35, 5, 5);
		ctx.fillRect(this.x + 10, this.y + 30, 15, 5);
		ctx.stroke();
	};

}

function newItems() {
	var x = randomNumber(40,800);
	items[items.length] = new Heart_obj(x,0);

}

function powerUp() {
		player.maxshots = player.maxshots + 1;
		player.speed = player.speed+1;
		player.color = "blue";
		player.draw = function() {
			ctx.beginPath();
			ctx.fillStyle=this.color;
			ctx.fillRect( this.x ,this.y , 40 ,20 );
			ctx.fillRect( this.x-(this.maxshots * 2) ,this.y - 5 , 10 ,15 );
			ctx.fillRect( this.x + 15 ,this.y - 15 , 10 ,25 );
			ctx.fillRect( this.x + 30 + (this.maxshots *2) ,this.y - 5 , 10 ,15 );
			ctx.fillRect( this.x-(this.maxshots * 2),this.y, 40 + (this.maxshots *4),20);
			ctx.stroke();
		};
}
