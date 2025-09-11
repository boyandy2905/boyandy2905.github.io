// // // // // // // // // // let x = 0, y=0
// // // // // // // // // // let x_velocity = 3, y_velocity = 4;
// // // // // // // // // // function setup() {
// // // // // // // // // //   createCanvas(900, 900);
// // // // // // // // // //   background(0);
// // // // // // // // // // }
// // // // // // // // // // function draw() {
// // // // // // // // // //   ellipse(x, y, 30, 30);
// // // // // // // // // //   x += x_velocity;
// // // // // // // // // //   y += y_velocity;
// // // // // // // // // //   if (x<0 || x>width)
// // // // // // // // // //   {
// // // // // // // // // //     x_velocity *= -1;
// // // // // // // // // //   }
// // // // // // // // // //   if (y<0 || y>height)
// // // // // // // // // //   {
// // // // // // // // // //     y_velocity *= -1;
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // function setup() {
// // // // // // // // //   createCanvas(500, 500);
// // // // // // // // //   background(0);
// // // // // // // // // }

// // // // // // // // // function draw() {
// // // // // // // // //   strokeWeight(random(5));
// // // // // // // // //   stroke(random(255), random(255), random(255));
// // // // // // // // //   point(mouseX, mouseY);
// // // // // // // // // }

// // // // let x=300;
// // // // let y=200;
// // // // let c=0;
// // // // let d=100;
// // // // function setup() {
// // // //   createCanvas(700, 400);
// // // // }
// // // // function draw() {
// // // //   background(0);

// // // //   stroke(255, 255, 0);
// // // //   strokeWeight(5);
// // // //   line(0, y+d/2, 700, y+d/2);
// // // //   fill(c, 0, 0);
// // // //   c=c+15;
// // // //   c%= 255;
// // // //   x=x+10;
// // // //   x%=700;
// // // //   ellipse(mouseX, y, d, d);
// // // //   ellipse(mouseX+d, y, d, d);
// // // //   noFill();
// // // //   triangle(mouseX, y, mouseX+d/2, y-d, mouseX+d, y);
// // // // }

// // let x = 0, velocity = 1;
// // function setup() {
// //   createCanvas(300, 300);
// // }

// // function draw() {
// //   background(0);
// //   stroke(255);
// //   line(x, 0, x,height);
// //   x += velocity;
// //   if (x < 0 || x > width) {
// //     velocity *= -1;
// //   }
// //   if (x < 100 || x > 200) {
// //   ellipse(width/2, height/2, 100, 100);
// //   }
// // }

// // // // // // let x, y, d, r = 50.0, tx = 0.0, ty = 0.5;
// // // // // // function setup() {
// // // // // //   createCanvas(300, 300);
// // // // // // }

// // // // // // function draw() {
// // // // // //   background(0);
// // // // // //   x = mouseX; // noise(tx) * width;
// // // // // //   y = mouseY; // noise(ty) * height;
// // // // // //   print(noise(tx), noise(ty));
// // // // // //   d = dist(width/2, height/2, x, y);
// // // // // //   if (d < r) {
// // // // // //     fill(random(255), random(255), random(255), 200);
// // // // // //   }
// // // // // //   ellipse(mouseX, mouseY, r, r);
// // // // // //   ellipse(width/2, height/2, r, r);
// // // // // //   tx += 0.01;
// // // // // //   ty += 0.01;
// // // // // // }

// // // let interval = 0, current_time = 0, previous_time = 0;
// // // function setup() {
// // //   createCanvas(300, 300);
// // // }

// // // function draw() {
// // //   background(0);
// // //   current_time = millis();
// // //   interval = current_time - previous_time;
// // //   if (interval > 1000) {
// // //     previous_time = millis();
// // //     fill(random(255), random(255), random(255));
// // //   }
// // //   ellipse(width/2, height/2, 200, 200);
// // // }

// let x = 150;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(mouseX, 0, mouseX, height);
//   ellipse(x, height/2, 50, 50);
//   if (mouseX > x) {
//     x++;
//   }
//   else {
//     x--;
//   }
// }

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  if (mouseX < width/2 && mouseY < height/2) {
    rect(0, 0, width/2, height/2);
  }
  else if (mouseX > width/2 && mouseY < height/2) {
    rect(width/2, 0, width/2, height/2);
  }
  else if (mouseX < width/2 && mouseY > height/2) {
    rect(0, height/2, width/2, height/2)
  }
  else {
    rect(width/2, height/2, width/2, height/2);
  }
}