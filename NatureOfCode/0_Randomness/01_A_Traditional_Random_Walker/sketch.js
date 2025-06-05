class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let choice = floor(random(4));
    let xStep = floor(random(3)) - 1;
    let yStep = floor(random(3)) - 1;

    if(choice === 0) {
      this.x += xStep;
    } else if (choice === 1) {
      this.x -= xStep;
    } else if (choice === 2) {
      this.y += yStep;
    } else {
      this.y -= yStep;
    }
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
