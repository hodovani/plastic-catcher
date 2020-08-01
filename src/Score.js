export default class Score {
  constructor(scene) {
    this.scene = scene;
    this.number = 0;
    this.text = this.scene.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      fill: "#000",
    });
  }

  update(newScore) {
    this.number = newScore;
    this.text.setText(`Score: ${this.number}`);
  }
}
