var CANVAS_SIZE = 350;
var game;

function setup() {
  var canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  canvas.parent("draw_area");
  frameRate(1);
  game = new Game(random_word());
}

function draw() {
  background("#ffffff");
  game.display(50, 50);
}

function keyPressed() {
  var pressed = key.toLowerCase();

  if (pressed.match(/[a-z]/)) {
    game.entered(pressed)
  }
}