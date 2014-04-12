function Brick(){
	Entity.call(this)


	game.bricks = []

	for (int row = 0; row < 3; row++)
	for (int col = 0; col < 10; col++)
    game.bricks.push(new Brick(col, row)

function Brick(col, row) {
  this.height = 30 // ?
  this.width = 100 // ?

  this.x = this.width * col
  this.y = this.height * row
}
}

Paddle.prototype = Object.create(Entity.prototype) //creates a new ball as a child entity using entity as parent
Paddle.prototype.constructor = Paddle //defines the constructor

Paddle.prototype.update = function() {
	Entity.prototype.update.apply(this, arguments)

	this.y = Math.min(Math.max (this.y, 0), game.height - this.height)// using math.min and math.max to control the velocity so it doesn't go off screen
}