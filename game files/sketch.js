let width, height, scale, imageElement, particles, len;

function preload() {
    imageElement = loadImage('assets/irrfan-and-rishi.png');
}

function setup() {
    len = 100;
    pixelDensity(1);
    width = 600;
    height = 337;
    scale = 1;
    particles = [];
    createCanvas(width, height);
    for (let i = 0; i < len; i++) {
        particles[i] = new Particle(random(width), random(height));
    }
    background(51);
}

function draw() {
    for (let i = 0; i < 1; i++) {
        imageElement.loadPixels();
        for (let i = 0; i < len; i++) {
            particles[i].update();
            particles[i].show();
        }
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = floor(random(4, 6));
    }

    show() {
        noStroke();
        let px = floor(this.x / scale);
        let py = floor(this.y / scale);
        let colours = imageElement.get(px, py);
        fill(colours[0], colours[1], colours[2]);
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    update() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}