var maxPoints = 100;

class Player {
  constructor(player) {
    this._elPlayer = document.querySelector(player);
    this._elEnemy = {};
    this.health = maxPoints * 0.8;
    this.strength = maxPoints * 0.2;
    this.name = player;

    // show strength and health player
    this.updateDom();

    // event listener
    this._elPlayer.querySelector('.btn-health').addEventListener('click', this.increaseHealth.bind(this));
    this._elPlayer.querySelector('.btn-strength').addEventListener('click', this.increaseStrength.bind(this));
    this._elPlayer.querySelector('.avatar').addEventListener('click', this.attack.bind(this));
  }

  updateDom() {
    this._elPlayer.querySelector('.current-strength').style.width = this.strength + '%';
    this._elPlayer.querySelector('.current-health').style.width = this.health + '%';
  }

  increaseHealth() {
    if(this.strength < 1) {
      alert('You cant increase your health');
      return;
    }
    this.strength--;
    this.health++;
    this.updateDom();
  }

  increaseStrength() {
    if(this.health < 1) {
      alert('You cant increase your strength');
      return;
    }
    this.health--;
    this.strength++;
    this.updateDom();
  }

  setEnemy(enemy) {
    this._elEnemy = enemy;
  }

  checkHealth() {
    if(this.health < 1) {
      alert(`${this._elEnemy.name} WIN!!!!!!!!`);
      this._elPlayer.remove();
    }
    return;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
    console.log(`${this.name} was hited and now have ${this.health} of health`);
    this.updateDom();
    this.checkHealth();
  }

  attack() {
    if(this._elEnemy == {}) {
      alert(`Enemy isn't ready!`);
      return;
    }
    // console.log(`${this.name} attacking ${this._elEnemy.name}`);
    this._elEnemy.takeDamage(this.strength);
  }
}

var playerOne = new Player("#one");
var playerTwo = new Player("#two");

// setting enemys
playerOne.setEnemy(playerTwo);
playerTwo.setEnemy(playerOne);
