function setup() {
    createCanvas(400, 300);
    background(0,0,255,50);
}
function draw() {
    stroke(255);
    s = random(1, 15);
    x = random(0, width);
    y = random(0, height);
    strokeWeight(s);
    point(x, y);
}