
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function mousePressed() {
    particles.push(new Particle(mouseX, mouseY));
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Add additional logic to keep particles within the canvas
        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }

        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    display() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
}
