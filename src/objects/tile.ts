export class Tile extends Phaser.GameObjects.Sprite {

  constructor(params) {
    super(params.scene, params.x, params.y, params.key, params.frame);

    // sprite
    this.setOrigin(0, 0);
    this.setInteractive();
    this.setScale(0.5);
    this.scene.add.existing(this);
  }

  update(): void {
   
  }

}
