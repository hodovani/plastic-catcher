import Fish from "./Fish";

export default class Fishes {
  constructor({ w = 200, h = 200, scene }) {
    // super(game);

    this.scene = scene;
    this.w = w;
    this.h = h;
    this.fishes = [];

    this.makeFish();
  }
  makeFish() {
    for (let i = 0; i < 5; i++) {
      this.fishes.push(
        new Fish({ w: this.w, h: this.h, scene: this.scene })
      );
    }
  }
  update() {
    for (fish in this.fishes) {
      fish.move();
    }
  }
}
