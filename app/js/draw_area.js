function preload() {

}

function setup() {
	var canvas = createCanvas(800, 600);
	canvas.parent("draw_area");
	frameRate(3);
}


function draw() {
	background("#000000");
	fill('blue');
	rect(0,0,640,480);
	fill("#ffffff");
	stroke("#ffffff");
	ellipse(random(640),random(480),30,30);
	
}