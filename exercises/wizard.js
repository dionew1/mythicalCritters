class Wizard {
  constructor(wizard_info) {
    this.name= wizard_info.name
    this.bearded = wizard_info.bearded == null
    this.isRested = true
    this.cast = this.increaseEnergyCount()

  }
  incantation(spell) {
    return spell.toUpperCase()
  }

  castSpell() {
    let spell
    if(this.isRested) {
      spell = 'magic bullet'
    } else {
      spell = 'i shall not cast!'
    }
    return this.incantation(spell)
  }

  increaseEnergyCount() {
    let count = 0
    return function() {
      count++
      if( count >= 3 ){
        this.isRested = false
      }
      return this.castSpell()
    }
  }

}


module.exports = Wizard
