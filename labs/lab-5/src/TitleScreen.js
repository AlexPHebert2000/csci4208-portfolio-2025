class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }
  create() {
    this.create_title();
    this.create_game_data();
    this.create_title();
    this.input.keyboard.on('keydown-SPACE', () => {this.scene.start('play')})
  }
  create_title() {
    const width = this.game.config.width;
    const height = this.game.config.height;
    this.add.text(width / 2, height / 3, "DODGER GAME", {
      fontSize: '48px',
      fill: "#fff"
    }).setOrigin(0.5);
    this.add.text(width/2, height/2, 'Arrow keys to move\nSpace to shoot',{
      fontSize: '24px',
      fill: "#fff",
      align: 'center'
    }).setOrigin(0.5);
    this.add.text(width/2, height * (2/3), "Press SPACE to start", {
      fontSize: '24px',
      fill: '#ff0',
    }).setOrigin(0.5)
  }
  create_game_data() {
    this.registry.set('top_score', this.registry.get('top_score') || 100);
    this.registry.set('winner', this.registry.get('winner') || 'Top Score');
  }
  create_topScore() {
    const topScore = this.registry.get('top_score');
    const winner = this.registry.get('winner');

    const x = this.game.config.width / 2
    const y = this.game.config.height / 2
    this.add.text(x, y, `Leader: ${winner} - ${topScore}`, {
      fontSize: '20px',
      fill: '#fff'
    }).setOrigin(0.5)
  }
}