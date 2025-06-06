let flowfield;
let vehicles = [];

function setup() {
  createCanvas(400, 400);
  flowfield = new FlowField(20);

  for(let i = 0; i < 120; i++) {
    vehicles.push(new Vehicle(random(width), random(height), random(2,5), random(0.1, 0.5)));

  }
}

function draw() {
  background(255);
  flowfield.display();

  for(let i = 0; i < vehicles.length; i++) {
    vehicles[i].follow(flowfield);
    vehicles[i].run();
  }
}

class FlowField {
  constructor(r) {
    this.resoultion = r;

    this.cols = width / this.resoultion;
    this.rows = height/ this.resoultion;

    this.field = make2Darray(this.cols, this.rows);
    this.init();
  }

  init() {
    noiseSeed(random(11));

    let xoff = 0;
    for ( let i = 0; i < this.cols; i ++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        let angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
        this.field[i][j] = p5.Vector.fromAngle(angle);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }

  display() {
    for(let i = 0; i < this.cols; i++) {
      for(let j = 0; j < this.rows; j++) {
        drawVector(this.field[i][j], i * this.resoultion, j*this.resoultion, this.resoultion - 2);
      }
    }
  }

  lookup(lookup) {
    let column = constrain(floor(lookup.x / this.resoultion), 0, this.cols - 1);
    let row = constrain(floor(lookup.y / this.resoultion), 0, this.rows - 1);
    return this.field[column][row].copy();
   }
}

function make2Darray(cols, rows) {
  let array = new Array(cols);

  for (let i = 0; i < cols; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

function drawVector(v,x,y,scayl) {
  push();

  let arrowSize = 4;
  
  translate(x,y);
  strokeWeight(1);
  stroke(127);
  rotate(v.heading());

  let len = v.mag() * scayl;

  line(0,0,len,0);

  pop();
}

class Vehicle {
  constructor(x,y,ms,mf) {
    this.position = createVector(x,y);
    this.accel = createVector(0,0);
    this.vel = createVector(0,0);

    this.r = 4;
    this.maxspeed = ms || 4;
    this.maxforce = mf || 0.1;
  }

  run() {
    this.update();
    this.borders();
    this.display();
  }

  follow(flow) {
    let desired = flow.lookup(this.position);
    desired.mult(this.maxspeed);
    
    let steer = p5.Vector.sub(desired, this.vel);

    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.accel.add(force);

  }

  update() {
    this.vel.add(this.accel);

    this.vel.limit(this.maxspeed);

    this.position.add(this.vel);

    this.accel.mult(0);
  }

    borders() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }

  display() {
    let theta = this.vel.heading() + PI/2;

    fill(127);
    stroke(0);
    strokeWeight(2);

    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);

    endShape(CLOSE);
    pop();
  }
}