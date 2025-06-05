function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  let x = randomGaussian(10, 60); // 평균 330, 표준 편차 60

  noStroke();
  fill(0,10);
  circle(x, 120, 16);
}
