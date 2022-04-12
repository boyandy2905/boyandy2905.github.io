// // // // let x=75;
// // // // let y=50;
// // // // let d1=80;
// // // // let d2=80;
// // // // function setup() {
// // // //   createCanvas(300, 300);
// // // // }
// // // // function draw() {
// // // //   background(200);
// // // //   ellipse(x, y, d1, d2); // Left
// // // //   x = x+100;
// // // //   ellipse(x, y, d1, d2); // Middle
// // // //   x = x+100;
// // // //   ellipse(x, y, d1, d2); // Right
// // // // }

// // let x1;
// // let x2;
// // let y;

// // x1=null;
// // x2=250;
// // y=30;

// // function setup() {
// //   createCanvas(300, 300);
  
// // }
// // function draw () {
// //   background(200);
// //   line(x1, y, x2, y);
// //   line(x1, y*2, x2, y*2);
// //   line(x1, y*3, x2, y*3);
// //   line(x1, y*4, x2, y*4);
// //   print(y);
// //   y=y+5;
// //   print(y);
// //   y %= 300
// //   console.log();
// //   print("\n"+y);
// // }

// // let d;
// // d=10;

// // function setup() {
// //   createCanvas(300, 300);
// //   background(200);
// //   let x1=150;
// //   let x2=150;
// //   noFill();
// //   ellipse(x1, x2, d, d);
// //   print(d);
// //   d=d+5;
// //   print(d);
// //   d %= 300
// // }

// let x=10;
// let y=10;
// let d=10;
// let c=0;

// let r=0;
// let g=0;
// let b=0;
// function setup() {
//   createCanvas(300, 300);
// }
// function draw() {
//   background(200);
//   fill(c,g,b,);
//   ellipse(x, y, d, d);
//   c=c+5;
//   d++;
//   x++;
//   y++;

//   d %= 300
//   c %= 255
  
// }

let x=300;
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
  c %= 255;
  x=x+100;
  x %=700;
  ellipse(x, y, d, d);
  ellipse(x+d, y, d, d);

  noFill();
  triangle(x,y, x+d/2, y-d, x+d, y);
}