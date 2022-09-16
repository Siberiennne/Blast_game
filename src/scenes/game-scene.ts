import { Tile } from "../objects/tile";

export class GameScene extends Phaser.Scene {
  private tile: Tile;
  private background: Phaser.GameObjects.TileSprite;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  init(): void {
  }

  preload(): void {
    this.load.pack(
      "blastPack",
      "./src/assets/pack.json",
      "blastPack"
    );
  }

  create(): void {
    this.background = this.add
      .tileSprite(0, 0, 1635, 1819, "background")
      .setScale(0.5)
      .setOrigin(0, 0);

    this.tile = new Tile({
      scene: this,
      x: 0,
      y: 0,
      key: "tile_red"
    });
  }

  update(): void {
  }
}
