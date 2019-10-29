class Pirate {
  constructor(name, job) {
    this.name = name
    this.job = job || 'Scallywag'
    this.cursed = false
    this.commitHeinousAct = this.increaseCount()
    this.booty = 0
  }

  increaseCount() {
    let count = 0
    return function() {
      count++
      this.cursed = count >= 3
    }
  }

  robShip() {
    this.booty += 100
    return 'YAARRR!'
  }

}

module.exports = Pirate
