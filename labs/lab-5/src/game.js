const config = {
  width: 640,
  height: 480,
  scene: [TitleScene, PlayScene],
  physics: {default: 'arcade'},
};

const game = new Phaser.Game(config);