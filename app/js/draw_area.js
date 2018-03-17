function preload() {

}

function setup() {
	var canvas = createCanvas(640, 480);
	canvas.parent("draw_area");
}

function draw() {
	background("#000000");
	noFill();
	stroke("#ffffff");
	for(i = 10; i < 400; i += 20) {
		rect(i, i, 30, 30);
//		ellipse(i, i, random(50), random(50));
	}
}