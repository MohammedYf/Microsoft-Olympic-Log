function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(66, 64, 12);

  noFill(0);
  strokeWeight(4);
  
//   ring 1 blue
  stroke('blue');
  ellipse(50, 50, 50, 50);
  
//   ring 2 yellow
  stroke('yellow');
  ellipse(75, 80, 50, 50);
  
//   ring 3 black
  stroke('black');
  ellipse(107, 50, 50, 50);
  
//   ring 4 green
  stroke('green');
  ellipse(136, 80, 50, 50);
  
//   ring 5 red
  stroke('red');
  ellipse(163, 50, 50, 50);
  
  
  
  
  
//   task 2 Microsoft logo
  
//   rect 1 orange
  noStroke();
  fill('rgb(242,80,34)');
  rect(30, 200, 55, 55);
  
//   rect 2 green
  fill('rgb(127,186,0)');
  rect(90, 200, 55, 55);
  
//   rect 3 blue
  fill('rgb(0,164,239)');
  rect(30, 260, 55, 55);
  
//   rect 4 yellow
  fill('rgb(255,185,0)');
  rect(90, 260, 55, 55);
  
}