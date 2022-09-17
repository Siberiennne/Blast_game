import "phaser";
import { GameScene } from "./scenes/game-scene";

const config: GameConfig = {
  width: 1920,
  height: 1080,
  parent: "game",
  type: Phaser.AUTO,
  scene: [GameScene],
  input: {
    keyboard: true
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
