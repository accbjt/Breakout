function Paddle(){
	Entity.call(this)

	this.width = 100
	this.height = 20

	this.y = game.height - this.height - 20

	this.score = 0
}

Paddle.prototype = Object.create(Entity.prototype) //creates a new ball as a child entity using entity as parent
Paddle.prototype.constructor = Paddle //defines the constructor

Paddle.prototype.update = function() {
	Entity.prototype.update.apply(this, arguments)

	this.y = Math.min(Math.max (this.y, 0), game.height - this.height)// using math.min and math.max to control the velocity so it doesn't go off screen
}

function Player(){
	Paddle.call(this)

	this.x = game.width / 2 - this.width / 2
}

Player.prototype = Object.create(Paddle.prototype)
Player.prototype.constructor = Player 

Player.prototype.update = function() {
	Paddle.prototype.update.apply(this, arguments)

	var speed = 15

	if (game.keyPressed.right){
		this.xVelocity = speed  
	} else if (game.keyPressed.left){
		this.xVelocity = -speed  
	} else{
		this.xVelocity = 0
	}

	this.x = Math.min(Math.max (this.x, 0), game.width - this.width)

}