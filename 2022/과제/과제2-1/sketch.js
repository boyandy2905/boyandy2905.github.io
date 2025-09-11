let y=200;
let c=0;
let d=100;
function setup() {
  createCanvas(700, 400);
}
function draw() {
  background(0);
  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);
  fill(c, 0, 0);
  c=c+15;
  c%= 255;
  ellipse(mouseX, y, d, d);
  ellipse(mouseX+d, y, d, d);
  noFill();
  triangle(mouseX, y, mouseX+d/2, y-d, mouseX+d, y);
}