var a = 5

console.log(a)
class Pet {
  constructor (props) {
    this.props = props
  }

  getName () {
    return this.props.name
  }

  getSpecies () {
    return this.props.species
  }

  getSpeech () {
    return 'I make this sound: '
  }

  getIdentity = () => {
    console.log(this)
  }

  // getSum = (a,b) => a + b
  getSum = (a, b) => {
    return a + b
  }
}

class Cat extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'cat'
  }

  getSpeech () {
    return super.getSpeech() + 'Meow!!'
  }
}
class Dog extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'dog'
  }

  getSpeech () {
    return super.getSpeech() + 'Ruff Ruff!!'
  }
}
function sayName (pet) {
  console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`)
  console.log(`${pet.getSpeech()}`)
}
var myPet = new Cat({ name: 'Luna' })
sayName(myPet)
myPet.getIdentity()
// Assign the method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity
// Call the new function using the myIdentity variable
myIdentity()
var myDog = new Dog({ name: 'Fido' })
sayName(myDog)
myDog.getIdentity()
console.log(myDog.getSum(10, 20))
