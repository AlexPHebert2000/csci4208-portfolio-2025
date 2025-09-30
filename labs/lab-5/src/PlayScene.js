class PlayScene extends Phaser.Scene {
  constructor() {
    super('play');
  }

  preload(){
    this.load.path = 'assets/';
    this.load.image('player', 'player.png')
    this.load.image('background', 'background.png');
    this.load.image('player-0', 'player-0.png');
    this.load.image('player-1', 'player-1.png');
    this.load.image('enemy', 'enemy.png');
    this.load.image('enemy-0', 'enemy-0.png');
    this.load.image('enemy-1', 'enemy-1.png');
  }

  create(){
    this.create_map();
    this.create_animations();
    this.create_player();
    this.create_enemies();
    this.create_collisions();
  }
  create_map() {
    this.background = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height, 'background')
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
  create_collisions() {
    this.physics.add.overlap(this.player, this.enemies, this.game_over, null, this);
  }
  create_animations() {
    if (!this.anims.exists('player-move')){
      const anim_player_move = {
        key: 'player-move',
        frames: [{key: 'player-0'}, {key: 'player-1'}],
        frameRate: 6,
        repeat: -1,
      };
      this.anims.create(anim_player_move);
    }
    if (!this.anims.exists('enemy-move')){
      const anim_enemy_move = {
        key: 'enemy-move',
        frames: [{key: 'enemy-0'}, {key: 'enemy-1'}],
        frameRate: 6,
        repeat: -1
      };
      this.anims.create(anim_enemy_move)
    }
  }

  update(){
    this.update_player();
    this.update_background();
  }
  update_player() {
    this.player.move();
  }
  update_background() {
    this.background.tilePositionX +=3
  }

  game_over(){
    this.cameras.main.flash();
    this.scene.restart(); 
  }

}