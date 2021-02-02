class Platform {
  constructor() {
    this.random = random(50, 400);
    this.pos = random(20, 500);
    this.position = createVector(this.random, this.pos);
    this.velocity = createVector(0, 0);
    this.accelaration = createVector(0, 0.01);
  }
  move() {
    this.velocity.add(this.accelaration)
    this.position.add(this.velocity)
  }
  show() {
    fill(0, 255, 0);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 70, 20);
  }
}
