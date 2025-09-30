class PowerUp extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.depth = 1,
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.velocity.x = -300;
  }

  applyEffect(player){
    console.warn('Power not implemented');
  }
}

class SlayPowerUp extends PowerUp {
  constructor(scene, x, y) {
    super(scene, x, y, 'powerup-slay');
  }
  applyEffect(player) {
    const scene = this.scene;
    scene.enemies.forEach(e => e.destroy());
    scene.enemy_projectiles.forEach(p => p.destroy());
    scene.cameras.main.flash();
  }
}