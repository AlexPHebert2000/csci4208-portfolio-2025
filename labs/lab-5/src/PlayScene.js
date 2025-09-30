class PlayScene extends Phaser.Scene {
  constructor() {
    super('play');
  }

  preload(){
    this.load.path = 'assets/';
    this.load.image('background', 'background.png')
  }
  create(){
    this.create_map();
  }
  create_map() {
    this.add.image(640/2, 480/2, 'background')
  }
  update(){}

}