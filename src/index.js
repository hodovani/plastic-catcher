import Phaser from "phaser";
import preload from "./preload";
import create from "./create";
import update from "./update";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 375,
  height: 667,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);
