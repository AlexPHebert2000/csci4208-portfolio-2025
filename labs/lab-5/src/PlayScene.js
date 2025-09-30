class PlayScene extends Phaser.Scene {
  constructor() {
    super('play');
  }

  preload(){
    this.load.path = 'assets/';
    this.load.image('background', 'background.png');
    this.load.image('player', 'player.png');
    this.load.image('enemy', 'enemy.png');
  }

  create(){
    this.create_map();
    this.create_player();
    this.create_enemies();
  }
  create_map() {
    this.add.image(config.width/2, config.height/2, 'background');
  }
  create_player() {
    this.player = new Player(this);
  }
  create_enemies() {
    this.enemies = [];
    const event = {
      delay: 200,
      callback: this.spawn_enemy,
      callbackScope: this,
      loop: true
    }
    this.time.addEvent(event, this);
  }
  spawn_enemy() {
    const position = {
      x: 640 + 32,
      y: Phaser.Math.Between(0, config.height)
    };
    const monster = new Enemy(this, position);
    this.enemies.push(monster);
  }

  update(){
    this.update_player();
  }
  update_player() {
    this.player.move();
  }

}