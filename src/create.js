import Score from "./Score";
import Fishes from "./Fishes";
import Net from "./Net";

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
  this.game.net = new Net(this);

  // add fish animation
  this.game.anims.create({
    key: "swim",
    frames: this.anims.generateFrameNumbers("fish"),
    frameRate: 24,
    repeat: -1,
  });

  // add fish
  this.game.fishes = new Fishes({ scene: this });

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(this.game.net, this.game.fish);

  // this.game.on;

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.game.fishes.fishes.forEach(({ fish }) =>
    this.physics.add.overlap(
      this.game.net,
      fish,
      collectFish,
      null,
      this
    )
  );

  this.input.keyboard.on("keydown-" + "SPACE", function (event) {
    this.game.net.isCatching = true;
  });
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
