import background from "./assets/img/background.png";
import fish from "./assets/img/fish.png";
import netBackground from "./assets/img/netBackground.png";

export default function preload() {
  this.load.image("background", background);
  this.load.spritesheet("fish", fish, {
    frameWidth: 52,
    frameHeight: 35.8,
  });
  this.load.spritesheet("netBackground", netBackground, {
    frameWidth: 45,
    frameHeight: 91,
  });
}
