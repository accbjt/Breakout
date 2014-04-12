function Entity () {
	
	//position
	this.x = 0
	this.y = 0

	//dimensions
	this.width = 0
	this.height = 0

	//velocity
	this.xVelocity = 0
	this.yVelocity = 0

Entity.prototype.update = function() {

	this.x += this.xVelocity
	this.y += this.yVelocity
};

Entity.prototype.draw = function(context) {
	context.fillStyle = '#fff'
	context.fillRect(this.x, this.y, this.width, this.height)
};

//basic bounding box collision
Entity.prototype.intersect = function(other) {
   return this.y + this.height > other.y &&
          this.y               < other.y + other.height &&
          this.x + this.width  > other.x &&
          this.x               < other.x + other.width
};

}