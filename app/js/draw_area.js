var CANVAS_SIZE = 350;
var looping =true;

function setup() {
  var canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  canvas.parent("draw_area");
}

function draw() {
  background("#ffffff")
  noFill();
  stroke("#000000");
  ellipse(CANVAS_SIZE/ 2, CANVAS_SIZE / 2, 
          CANVAS_SIZE - 10, CANVAS_SIZE - 10)
  
  var d = new Date();
  
  drawClockHand(d.getHours() / 12, 0.7);
  drawClockHand(d.getMinutes() / 60, 0.8);
  drawClockHand(d.getSeconds() / 60, 0.9);
  drawClockHand(d.getMilliseconds() / 1000, 1);
}

function drawClockHand(position, handLength) {
  noFill();
  stroke("#000000");
  var pxHandLen = CANVAS_SIZE/2 * (handLength || 1);
  line(CANVAS_SIZE/ 2, CANVAS_SIZE/ 2, 
    CANVAS_SIZE/2 + pxHandLen * Math.sin(2 * Math.PI * position),
    CANVAS_SIZE/2 - pxHandLen * Math.cos(2 * Math.PI * position));
}

function mouseClicked() {
  looping = !looping;
  if (looping) {
    loop();
  } else {
    noLoop();
  }
}