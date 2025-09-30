class PlayScene extends Phaser.Scene {
  constructor() {
    super('play');
  }

  preload(){
    this.load.path = 'assets/';
    this.load.image('background', 'background.png');
    this.load.image('player', 'player.png');
  }
  create(){
    this.create_map();
    this.create_player();
  }
  create_map() {
    this.add.image(640/2, 480/2, 'background');
  }
  create_player() {
    this.player = new Player(this);
  }
  update(){}

}