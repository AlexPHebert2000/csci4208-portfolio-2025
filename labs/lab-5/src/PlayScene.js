class PlayScene extends Phaser.Scene {
  constructor() {
    super('play');
    this.top_score = 100;
    this.winner = 'Top Score'
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
    this.load.image('projectile', 'projectile.png');
    this.load.image('powerup-projectile', 'powerup-1.png');
    this.load.image('powerup-slay', 'powerup-2.png');
  }

  create(){
    this.create_map();
    this.create_animations();
    this.create_projectiles();
    this.create_player();
    this.create_enemies();
    this.create_collisions();
    this.create_hud();
    this.create_powerups();
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
    this.score += 1;
  }
  create_collisions() {
    this.physics.add.overlap(this.player, this.enemies, this.game_over, null, this);
    this.physics.add.overlap(this.player_projectiles, this.enemies, this.slay_enemy, null, this)
    this.physics.add.overlap(this.enemy_projectiles, this.player, this.game_over, null, this)
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
  create_hud() {
    this.score = 0;
    this.score_text = this.add.text(32, 32, "");
    this.score_text.depth = 3;
    this.score_text.setColor('rgb(255,255,255)');

    this.top_score_text = this.add.text(600, 32, "");
    this.top_score_text.depth = 3;
    this.top_score_text.setOrigin(1, 0);
  }
  create_projectiles() {
    this.player_projectiles = [];
    this.enemy_projectiles = [];
  }
  slay_enemy(projectile, enemy){
    enemy.destroy();
    projectile.destroy();
  }
  create_powerups() {
    this.powerups = [];
    const event = {
      delay: 3000,
      callback: this.spawn_powerup,
      callbackScope: this,
      loop: true
    }
    this.time.addEvent(event, this);
  }
  spawn_powerup() {
    //if (Phaser.Math.Between(0, 4) !== 0){return}
    const PowerUpClass = PowerUp;
    const position = {
      x: config.width + 32,
      y: Phaser.Math.Between(50, 430)
    }
    const powerup = new PowerUpClass(this, position.x, position.y, 'powerup-slay');
    this.powerups.push(powerup);
  }

  update(time){
    this.update_player(time);
    this.update_enemies(time);
    this.update_background();
    this.update_score()
  }
  update_player(time) {
    this.player.move();
    this.player.attack(time);
  }
  update_enemies(time) {
    this.enemies.forEach(e => e.attack(time))
  }
  update_background() {
    this.background.tilePositionX +=3;
  }
  update_score() {
    this.score_text.setText(`Score: ${this.score}`);
    this.top_score_text.setText(`${this.winner}: ${this.top_score}`);
  }

  game_over(){
    if (this.score > this.top_score) {
      this.top_score = this.score;
      this.physics.pause();
      this.winner = prompt('Winner! Enter your name: ') ?? "Top Score";
      this.input.keyboard.keys = [];
    }
    this.cameras.main.flash();
    this.scene.restart(); 
  }

}