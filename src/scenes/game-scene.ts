import * as CONST from '../const/const';

import { Tile } from "../objects/tile";

export class GameScene extends Phaser.Scene {
  private tiles: Tile[][];
  private background: Phaser.GameObjects.TileSprite;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  init(): void {

    

    this.tiles = [];

    for (let y = 0; y < CONST.GRID_INFO.columnsNumber; y++)
    {
      this.tiles[y] = [];
    }

    // Input
    //this.input.on('gameobjectdown', this.pointerdown, this);
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

      for (let y = 0; y < CONST.GRID_INFO.columnsNumber; y++)
      {
        for (let x = 0; x < CONST.GRID_INFO.rowsNumber; x++)
        {
          this.tiles[y][x] = this.addTile(x, y);
        }
      }

  }

  update(): void {
  }

  private addTile(x: number, y: number): Tile {
    let randomTileType: string =
      CONST.TILES_COLORS[Phaser.Math.RND.between(0, CONST.TILES_COLORS.length - 1)];

    let key = "tile_" + randomTileType;
    return new Tile({
      scene: this,
      x: CONST.GRID_INFO.paddingX + x * CONST.TILES_INFO.tileWidth,
      y: CONST.GRID_INFO.paddingY + y * CONST.TILES_INFO.tileHeight,
      key: key
    });
  }

  private fillTile(): void {
    for (var y = 0; y < this.tiles.length; y++)
    {
      for (var x = 0; x < this.tiles[y].length; x++)
      {
        if (this.tiles[y][x] === undefined)
        {
            let tile = this.addTile(x, y);
            this.tiles[y][x] = tile;
        }
      }
    }
  }

  private pointerdown(pointer: any, gameobject: any, event: any): void {
    console.log("Click");
  }

}
