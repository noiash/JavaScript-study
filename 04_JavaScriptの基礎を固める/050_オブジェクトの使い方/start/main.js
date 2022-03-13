const person = {
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interest: {
    sport: 'soccer',
    music: 'piano'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
};

const ageKey = 'age';
person['age'] = 12;
console.log(person.age)
person.getFullName();