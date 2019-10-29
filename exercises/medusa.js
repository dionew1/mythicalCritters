class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }

  stare(person) {
    person.stoned = true
    this.statues.push(person)
    if(this.statues.length > 3){
      this.statues[0].stoned = false
      this.statues.shift()
    }
  }
}

module.exports = Medusa
