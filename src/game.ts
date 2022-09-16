import "phaser";
import { GameScene } from "./scenes/game-scene";

const config: GameConfig = {
  width: 1920,
  height: 1080,
  parent: "game",
  scene: [GameScene],
  input: {
    keyboard: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 }
    }
  }
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.addEventListener("load", () => {
  let game = new Game(config);
});
