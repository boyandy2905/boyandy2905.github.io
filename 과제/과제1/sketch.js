let x = 0, y = 200
let c1 = 0, c2 = 0, c3 = 0;
let d = 100;
let theta = 0.0;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(0);
  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);
  fill(c1, c2, c3);
  x = map(sin(theta), -1, 1, 0, 600);
  ellipse(x, y, d, d);
  ellipse(x+d, y, d, d);
  noFill();
  triangle(x, y, x+d/2, y-d, x+d, y);
  theta += 0.05;
  x %= 700;
  c1 = c1 + 15;
  c2 = c2 + 45;
  c3 = c3 + 75;
  c1 %= 255;
  c2 %= 255;
  c3 %= 255;
}