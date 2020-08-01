import Score from "./Score";

export default function create() {
  this.bg = this.add.sprite(
    this.game.config.width / 2,
    this.game.config.height / 2,
    "background"
  );
  this.bg.setDisplaySize(
    this.game.config.width,
    this.game.config.height
  );

  //  Score init
  this.game.score = new Score(this);

  // add net background
  this.game.net = this.physics.add.sprite(100, 450, "netBackground");
  this.game.net.setCollideWorldBounds(true);
  this.game.cursors = this.input.keyboard.createCursorKeys();

  // add fish
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

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(this.game.net, this.game.fish);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(
    this.game.net,
    this.game.fish,
    collectFish,
    null,
    this
  );

  // var mummyAnimation = this.anims.create({
  //   key: "swim",
  //   frames: this.anims.generateFrameNumbers("fish0"),
  //   frameRate: 7,
  //   repeat: -1,
  // });
  // for (let i = 1; i < 5; i++) {
  //   let sprite = this.add.sprite(i * 100, 300, "fish0").setScale(1);
  //   sprite.play("swim");
  // }

  // var Fish = new Phaser.Class({
  //   Extends: Phaser.GameObjects.Image,

  //   initialize: function Food(scene, x, y) {
  //     Phaser.GameObjects.Image.call(this, scene);

  //     this.setTexture("fish0");
  //     this.setPosition(x * 16, y * 16);
  //     this.setOrigin(0);

  //     this.total = 0;

  //     scene.children.add(this);
  //   },
  // });
}

function collectFish(player, fish) {
  fish.disableBody(true, true);

  //  Add and update the score
  this.game.score.update(this.game.score.number + 10);
  // this.game.score += 10;
  // this.game.scoreText.setText("Score: " + this.game.score);

  // if (stars.countActive(true) === 0) {
  //   //  A new batch of stars to collect
  //   stars.children.iterate(function (child) {
  //     child.enableBody(true, child.x, 0, true, true);
  //   });

  //   var x =
  //     player.x < 400
  //       ? Phaser.Math.Between(400, 800)
  //       : Phaser.Math.Between(0, 400);

  //   var bomb = bombs.create(x, 16, "bomb");
  //   bomb.setBounce(1);
  //   bomb.setCollideWorldBounds(true);
  //   bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  //   bomb.allowGravity = false;
  // }
}
