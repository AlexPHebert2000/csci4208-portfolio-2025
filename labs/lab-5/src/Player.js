class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    super(scene, 300, 200, 'player');
    this.depth = 2;
    this.speed = 200;
    scene.add.existing(this);
  }
}