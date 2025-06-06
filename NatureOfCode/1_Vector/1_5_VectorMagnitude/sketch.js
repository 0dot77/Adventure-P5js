function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width/2, height/2);

  mouse.sub(center);

  let m = mouse.mag();
  fill(0);
  rect(0,0,m,10);

  translate(width/2, height/2);
  line(0,0,mouse.x,mouse.y);
}
