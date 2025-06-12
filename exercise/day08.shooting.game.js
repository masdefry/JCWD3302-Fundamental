class Player {
  name = '';
  health = 100;
  power = 10;

  constructor(_name) {
    this.name = _name;
  }

  damage(power) {
    this.health -= power;
  }

  useItem(item) {
    // { power: 10, health: 0 }
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(`${this.name} (Health=>${this.health}, Power=>${this.power})`);
  }
}

const player01 = new Player('Indonesia');
const player02 = new Player('Jepang');

class ShootingGame {
  player1 = {};
  player2 = {};

  constructor(_player1, _player2) {
    this.player1 = _player1;
    this.player2 = _player2;
  }

  getRandomItem() {
    const random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
      return { health: 10, power: 0 };
    } else if (random === 2) {
      return { health: 0, power: 10 };
    } else {
      return { health: 10, power: 10 };
    }
  }

  start() {
    console.log('BEFORE HIT');
    this.player1.showStatus();
    this.player2.showStatus();

    const randomItemPlayer01 = this.getRandomItem();
    const randomItemPlayer02 = this.getRandomItem();

    this.player1.useItem(randomItemPlayer01);
    this.player2.useItem(randomItemPlayer02);

    console.log('AFTER GET RANDOM ITEM');
    this.player1.showStatus();
    this.player2.showStatus();

    // Player1 HIT Player2
    this.player2.damage(this.player1.power);

    // Player2 HIT Player1
    this.player1.damage(this.player2.power);

    console.log('After HIT');
    this.player1.showStatus();
    this.player2.showStatus();
    if (this.player1.health > 0 && this.player2.health > 0) {
      this.start();
    } else {
      if (this.player1.health > this.player2.health) {
        console.log('Player 1 Won');
      } else {
        console.log('Player 2 Won');
      }
    }
  }
}

new ShootingGame(player01, player02).start();
