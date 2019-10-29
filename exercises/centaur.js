class Centaur {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.irritabilityCount = this.increaseIrritability()
    this.layingDown = false
    this.isRested = true
  }

  shoot() {
    if( this.irritabilityCount() < 3 && !this.layingDown){
      return 'Twang!!!'
    }
    return 'NO!'
  }

  run() {
    if (this.irritabilityCount() < 3 && !this.layingDown){
      return 'Clop clop clop clop!!!'
    }
    return 'NO!'
  }

  increaseIrritability() {
    let count = 0
    return function() {
      count++
      if( count >= 3 ){
        this.cranky = true
        this.isRested = false
      }
      return count
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  sleep() {
    if(this.standing) return 'NO!'
    this.resetIrritabilityAndCranky()
    this.isRested = true
    return 'ZZZZ'
  }

  resetIrritabilityAndCranky() {
    this.irritabilityCount = this.increaseIrritability()
    this.cranky = false
  }

  drinkPotion() {
    if(this.standing){
      this.resetIrritabilityAndCranky()
    }
    if(this.isRested){
      this.cranky = true
    }
    return 'Not while I\'m laying down!'
  }

}

module.exports = Centaur
