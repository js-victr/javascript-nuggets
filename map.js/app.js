// MAP Method
const people = [
    {
        name: 'Klaus',
        age: 345,
        position: 'hybride',
    },
    {
        name: 'Rebecca',
        age: 156,
        position: 'vampire',
    },
    {
        name: 'Elijah',
        age: 290,
        position: 'vampire',
    }
];
// Quokka.js - Exntension
// returns a new array
// does not change the size of original array(unlike filter)
// uses values from original array when making new one

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
    return {
        firstName:item.name.toUpperCase(),
        oldAge:item.age + 20
    }
})

console.log(newPeople);

 const names = people.map((person) => `<h2>${person.name}</h2>`)
 const result = document.querySelector('#result')

 result.innerHTML = names.join('')