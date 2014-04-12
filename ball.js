function Ball(){
	Entity.call(this)

	this.width = 20
	this.height = 20

	this.reset()

	this.blip = new Audio()
  if (this.blip.canPlayType('audio/mpeg')) {
    this.blip.src = 'sounds/blip.mp3'
  } else {
    this.blip.src = 'sounds/blip.ogg'
  }
}

Ball.prototype = Object.create(Entity.prototype) //creates a new ball as a child entity using entity as parent
Ball.prototype.constructor = Ball //defines the constructor

Ball.prototype.reset = function() {
	var min = 0,
		max = -5

	this.x = game.width / 2 - this.width
	this.y = game.height - 60

	this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min)
	this.xVelocity = 5

	};

Ball.prototype.update = function() {
	Entity.prototype.update.apply(this, arguments)

	if (this.y < 0){ 
		this.yVelocity *= -1

		//this.blip.play()
	}

	if (this.x > game.width - this.width || this.x < 0){ 
		this.xVelocity *= -1

		//this.blip.play()
	}

	if (this.y > game.height){
		this.reset()
	}


	if (this.intersect(game.player)){
		var hitter = game.player
	}

	if (hitter){
		this.xVelocity *= -1.1
		this.yVelocity *= -1.1

		this.yVelocity += hitter.yVelocity / 4

		//this.blip.play()
	}
};