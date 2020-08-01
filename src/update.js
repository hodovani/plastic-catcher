const velocity = 150;
const fishVelocity = -30;

export default function update() {
  /**
   * Net movement
   *
   * Add arrow control to net
   */
  if (this.game.cursors.up.isDown) {
    this.game.net.setVelocityY(-velocity);
  } else if (this.game.cursors.down.isDown) {
    this.game.net.setVelocityY(velocity);
  } else {
    this.game.net.setVelocityY(0);
  }
  if (this.game.cursors.right.isDown) {
    this.game.net.setVelocityX(velocity);
  } else if (this.game.cursors.left.isDown) {
    this.game.net.setVelocityX(-velocity);
  } else {
    this.game.net.setVelocityX(0);
  }

  /**
   * Fish movement
   *
   * Flip image and velocity horizontally when fish touch screen
   */
  if (
    this.game.fish.body.touching.right ||
    this.game.fish.body.blocked.right
  ) {
    this.game.fish.flipX = false;
    this.game.fish.setVelocityX(fishVelocity);
  } else if (
    this.game.fish.body.touching.left ||
    this.game.fish.body.blocked.left
  ) {
    this.game.fish.flipX = true;
    this.game.fish.setVelocityX(-fishVelocity);
  }
}
