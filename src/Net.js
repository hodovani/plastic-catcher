const distanceDelta = 0.01;
const angleDelta = -90;
export default class Net {
  constructor(scene) {
    this.center = { x: 180, y: 200 };
    this.scene = scene;
    this.angleKey = 1;
    this.net = scene.physics.add.sprite(180, 210, "netBackground");
    this.net.setCollideWorldBounds(true);
    this.net.angle = 0;
    this.isCatching = false;
    this.isReturning = false;
    this.distance = 0;
  }

  reset() {
    //re-init properites
    this.x = this.scene.rnd.integerInRange(0, this.w);
    this.drift =
      this.scene.rnd.integerInRange(-1, 1) *
      (0.05 + Math.random() * 0.1);
    this.fallSpeed = 1 + Math.random() * 10;
    this.scale.x = 0.1 + Math.random();
    this.scale.y = this.scale.x;
    this.alpha = 0.1 + Math.random();
  }

  move() {
    this.x += this.drift;
    this.y += this.fallSpeed;
    if (this.y > this.h) {
      //take back to top
      this.y = -10;
      this.reset();
    }
  }

  update() {
    if (this.isCatching) {
      this.updateDistance();
    } else {
      this.updateAngle();
    }
  }

  updateDistance() {
    if (this.isReturning) {
      this.distance -= distanceDelta;
    } else {
      this.distance += distanceDelta;
    }
    if (this.distance < 0) {
      this.isCatching = false;
      this.isReturning = false;
    } else if (this.distance > 1) {
      this.isReturning = true;
    } else {
      this.net.x +=
        Math.cos(((this.net.angle - angleDelta) * Math.PI) / 180) *
        (this.distance * (this.isReturning ? -1 : 1));
      this.net.y +=
        Math.sin(((this.net.angle - angleDelta) * Math.PI) / 180) *
        (this.distance * (this.isReturning ? -1 : 1));
    }
  }

  updateAngle() {
    Phaser.Actions.RotateAroundDistance(
      [this.net],
      this.center,
      this.angleKey * 0.02,
      45
    );
    var angleDeg =
      (Math.atan2(
        this.net.y - this.center.y,
        this.net.x - this.center.x
      ) *
        180) /
      Math.PI;
    // Rotate the net to make the top always look at the center of rotation
    this.net.angle = angleDeg + angleDelta;
    if (this.net.angle > 60 || this.net.angle < -60) {
      this.angleKey *= -1;
    }
    // console.log(this.net.angle);
  }
}
