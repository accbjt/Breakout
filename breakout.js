function Background(){

}

Background.prototype.draw = function(context) {
	context.fillStyle = '#000'
	context.fillRect(0, 0, game.width, game.height)

	context.fillStyle = '#fff'
	context.font = '40px monospace'
}

var canvas = $('canvas')[0], //jquery calling the canvas
	game = new Game(canvas)

game.entities = [
	new Background(), // executing Background function
	game.player = new Player(),
	game.ball = new Ball(),
	game.bricks = new Brick()
]

game.start()
canvas.focus()