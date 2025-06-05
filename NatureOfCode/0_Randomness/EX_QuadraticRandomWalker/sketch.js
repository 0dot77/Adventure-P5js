let walker;

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
    let step = 5;

    let xstep = acceptreject() * step;

    if(random([false, true])) {
      xstep *= -1;
    }

    let ystep = acceptreject() * step;
    if(random([false, true])) {
      ystep *= -1;
    }

    this.x += xstep;
    this.y += ystep;
  }

}

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

function acceptreject() {
  while(true) {
    let r1 = random(1);
    let probability = r1 * r1;
    let r2 = random(2);

    if(r2 < probability) {
      return r1;
    }
  }
}