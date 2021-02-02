class Doodler {
  constructor() {
    this.r = 20;
    this.velocityRight = createVector(0, 0);
    this.accelarationRight = createVector(0.1, -0.1);
    this.velocityLeft = createVector(0, 0);
    this.accelarationLeft = createVector(-0.1, -0.1);
    this.velocityBottom = createVector(0, 0);
    this.accelarationBottom = createVector(0, 0.1);
    this.location = createVector(width / 2, 540);
    World.add(world, this.location);
  }

  move() {
    if (keyDown("RIGHT_ARROW")) {
      this.velocityRight.add(this.accelarationRight);
      this.location.add(this.velocityRight);
    }

    if (keyDown("LEFT_ARROW")) {
      this.velocityLeft.add(this.accelarationLeft);
      this.location.add(this.velocityLeft);
    }

    if (keyDown("DOWN_ARROW")) {
      this.velocityBottom.add(this.accelarationBottom);
      this.location.add(this.velocityBottom);
    }
  }

  bounce() {}

  display() {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(this.location.x, this.location.y, 20, 70);
  }
}
