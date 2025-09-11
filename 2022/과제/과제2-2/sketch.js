let x = 0, y=0
let x_velocity = 3, y_velocity = 4;
function setup() {
  createCanvas(900, 900);
  background(0);
}
function draw() {
  ellipse(x, y, 30, 30);
  x += x_velocity;
  y += y_velocity;
  if (x<0 || x>width)
  {
    x_velocity *= -1;
  }
  if (y<0 || y>height)
  {
    y_velocity *= -1;
  }
}