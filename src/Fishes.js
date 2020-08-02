import Fish from "./Fish";

export default class Fishes {
  constructor({ scene }) {
    this.scene = scene;
    this.fishes = [];

    for (let i = 0; i < 5; i++) {
      this.fishes.push(
        new Fish({ x: i * 50, y: 200 + i * 50, scene: this.scene })
      );
    }
  }
  update() {
    this.fishes.forEach((fish) => fish.update());
  }
}
