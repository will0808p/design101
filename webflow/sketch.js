let s;

function setup() {
  createCanvas(640, 480);
  s = new Scribble();
}

function draw() {
  frameRate(1);
  background(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(random(1, 5));
  stroke(random(0, 255), random(0, 255), random(0, 255));
  s.scribbleFilling([width / 4, width / 4, width / 4 * 3, width / 4 * 3], [height / 4, 3 * height / 4, 3 * height / 4, height / 4], random(5, 10), random(0, 360));
  stroke(random(0, 255), random(0, 255), random(0, 255));
  s.scribbleRect(width / 2, height / 2, width / 2, height / 2);
}