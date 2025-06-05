// Controls
let spreadSlider;
let sizeSlider;
let sizespSlider;
let baseHueSlider;
let huespSlider;
let alphaSlider;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  background(98);
  
  createControls(420);
}

function draw() {
  translate(width/2, height/2);
  scale(height /2);

  x = randomGaussian(0, spreadSlider.value());
  y = randomGaussian(0, spreadSlider.value());

  ellipse(x,y,10,10);
}

function createControls(ypos) {
  let xpos = 20;

  cpTitle = createP("Paint Splatter Simulation");
  cpTitle.position(xpos, ypos);
  cpTitle.style("font-size", "14pt");
  cpTitle.style("font-weight", "bold");
  xpos += 250;

  clearButton = createButton("Clear");
  clearButton.position(xpos, ypos + 20);

  xpos = 20;
  spreadTitle = createP("Spread");
  spreadTitle.position(xpos, ypos + 50);

  xpos += 35;
  spreadSlider = createSlider(0, 0.75, 0.25, 0);
  spreadSlider.position(xpos + 10, ypos + 63);
  spreadSlider.size(80);
}
