gameOverSplash = {
	gradientTargetLoc:540,
	gradientLoc:0,
	draw:function() {
		if (this.gradientTargetLoc > this.gradientLoc || this.gradientLoc < 0) {	
			var gradientPosition = this.gradientLoc
			var gradient = ctx.createLinearGradient(gradientPosition,gradientPosition, 540, 540);
			gradient.addColorStop(0,"red");
			gradient.addColorStop(1,"white");
			ctx.beginPath();
			ctx.fillStyle = gradient;
			ctx.fillRect(0,0,960,540);
			ctx.stroke();
			this.gradientTargetLoc = this.gradientTargetLoc + 5;
		} else {
			var gradientPosition = this.gradientLoc
			var gradient = ctx.createLinearGradient(gradientPosition,gradientPosition, 540, 540);
			gradient.addColorStop(0,"red");
			gradient.addColorStop(1,"white");
			ctx.beginPath();
			ctx.fillStyle = gradient;
			ctx.fillRect(0,0,960,540);
			ctx.stroke();
			this.gradientLoc = this.gradientLoc - 5;
		}
	}
};