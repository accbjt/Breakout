// the game engine

function Game(canvas) {
	var self = this

	this.context = canvas.getContext("2d") //calls the 2d context
	this.width = canvas.width // sets the width to the canvas reference
	this.height = canvas.height

	//keeping status of the keystroke
	this.keyPressed = {} //creates a object name keypress

	$(canvas).on('keydown keyup', function(e) { //event listener
		//converts key code to key name
		var keyName = Game.keys[e.which]

		if (keyName) {
			self.keyPressed[keyName] = e.type === 'keydown'
			e.preventDefault()
		}
	})
}

//game keys
Game.keys ={
	32: 'space',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down'
}

Game.prototype.start = function() { //creating a simple game loop
	var self = this,
		fps = 60,
		interval = 1000/fps // mm per frame

	setInterval(function(){
		self.update()
		self.draw()
	}, interval)
}

Game.prototype.update = function() {
	this.entities.forEach(function(entity){
		if (entity.update) entity.update() // if has update function is true then update
	})
}

Game.prototype.draw = function() {
	var self = this

	this.entities.forEach(function(entity){
		if (entity.draw) entity.draw(self.context) // if has draw function is true then update
	})
}