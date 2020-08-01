export default class Fish {
  constructor({ w, h, scene }) {
    this.scene = scene;
    var f = this.scene.add.graphics();
    f.beginFill(0xffffff, 1);
    f.drawCircle(0, 0, 10);
    f.endFill();
    this.add(f);

    this.w = w;
    this.h = h;

    this.y = this.scene.rnd.integerInRange(0, h);
    this.reset();

    this.game.fish = this.physics.add.sprite(100, 100, "fish0");
    this.game.fish.setVelocityX(-30);
    this.game.fish.setCollideWorldBounds(true);
    this.anims.create({
      key: "swim",
      frames: this.anims.generateFrameNumbers("fish0"),
      frameRate: 24,
      repeat: -1,
    });
    this.game.fish.anims.play("swim", true);
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
}
