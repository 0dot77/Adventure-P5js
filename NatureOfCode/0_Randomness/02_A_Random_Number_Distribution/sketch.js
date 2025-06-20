let randomCounts = [];

let total = 20;

function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(220);

  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  stroke(0);
  fill(127);

  let w = width / randomCounts.length;

  for(let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}
