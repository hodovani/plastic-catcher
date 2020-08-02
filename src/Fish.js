// var Fish = new Phaser.Class({
//   Extends: Phaser.GameObjects.Image,

//   initialize: function Food(scene, x, y) {
//     Phaser.GameObjects.Image.call(this, scene);

//     this.setTexture("fish");
//     this.setPosition(x * 16, y * 16);
//     this.setOrigin(0);

//     this.total = 0;

//     scene.children.add(this);
//   },
// });
export default class Fish {
  constructor({ x, y, scene }) {
    this.direction = -1;
    this.velocity = 30;
    this.scene = scene;
    this.fish = scene.physics.add.sprite(x, y, "fish");
    this.fish.setVelocityX(this.direction * this.velocity);
    this.fish.setCollideWorldBounds(true);
    this.fish.anims.play("swim", true);
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
    if (
      this.fish.body.touching.right ||
      this.fish.body.blocked.right
    ) {
      this.fish.flipX = false;
      this.fish.setVelocityX(-this.velocity);
    } else if (
      this.fish.body.touching.left ||
      this.fish.body.blocked.left
    ) {
      this.fish.flipX = true;
      this.fish.setVelocityX(this.velocity);
    }
  }
}
