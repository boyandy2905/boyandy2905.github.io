// // // // let x = 30, y = 30;
// // // // let velocity_x = 1, velocity_y = 1;
// // // // let accel_x = 0.2, accel_y = 0.2;
// // // // let friction = 0.99;

// // // // function setup() {
// // // //   createCanvas(400, 400);
// // // //   frameRate(200); // try to change
// // // // }

// // // // function draw() {
// // // //   background(200);
// // // //   ellipse(x, y, 30, 30);

// // // //   // velocity_x += accel_x;
// // // //   // velocity_y += accel_y;

// // // //   // velocity_x += friction;
// // // //   // velocity_y += friction;
  
// // // //   x += velocity_x;
// // // //   y += velocity_y;

// // // //   textSize(15);
// // // //   text(frameCount + ' : ' + frameRate(), 10, 30);
// // // // }

// // // // 끝

// // // let x = 150, y = 150;
// // // let theta = 0.0;

// // // function setup() {
// // //   createCanvas(400, 400);
// // //   frameRate(60);
// // // }

// // // function draw() {
// // //   background(200);
// // //   let y = height/2 + height/2 * sin(theta);
// // //   // let y = map(sin(theta), -1, 1, 0, height);
// // //   ellipse(x, y, 30, 30);
// // //   theta += 0.1;
// // // }

// // // 끝

// // let x = 200, y = 200;
// // let theta = 0.0;
// // let r = 0, g =0, b = 0;

// // function setup() {
// //   createCanvas(400, 400);
// //   frameRate(60);
// // }

// // function draw() {
// //   background(200);
// //   let d = map(sin(theta), -1, 1, 0, height);
// //   ellipse(x, y, d, d);
// //   theta += 0.1;

// //   fill(r, g, b);
// //   r += 15;
// //   r %= 255;
// //   g += 30;
// //   g %= 255;
// //   b += 45;
// //   b %= 255;
// // }

// // 끝

// let x = 200, y = 200;
// let d = 30;
// let degree = 0.0;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
// }

// function draw() {
//   background(200);
//   let theta = radians(degree);
//   let y = height/2 + height/2 * sin(theta);
//   line(x, 0, x, y);
//   ellipse(x, y, d, d);
//   degree += 6;
// }

// 끝

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  strokeWeight(random(5));
  stroke(random(255), random(255), random(255));
  point(mouseX, mouseY);
}