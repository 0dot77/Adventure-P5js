function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width/2, height/2);

  mouse.sub(center);

  translate(width/2, height/2);
  strokeWeight(2);
  stroke(200);
  line(0,0,mouse.x, mouse.y);

  mouse.mult(0.5);

  stroke(0);
  strokeWeight(4);
  line(0,0,mouse.x, mouse.y);
}
