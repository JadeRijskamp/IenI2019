var diameter = 0;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('deepskyblue');
  ellipse(widht/2,height/2,diamter);
  diameter=constrain(diameter,0,450);
  diameter++;
}