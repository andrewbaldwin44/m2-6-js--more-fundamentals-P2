const people = [
  { name: { first: 'Alyssa', middle: 'P.', last: 'Hacker' }, age: 26 },
  { name: { first: 'Ben', last: 'Bitdiddle' }, age: 34 },
  { name: { first: 'Eva', middle: 'Lu', last: 'Ator' }, age: 40 },
  { name: { first: 'Lem', middle: 'E.', last: 'Tweakit' }, age: 45 },
  { name: { first: 'Louis', last: 'Reasoner' }, age: 21 },
  { name: { first: 'Shahan', middle: 'Haig', last: 'Krakirian' }, age: 21 },
];

function avgAge(peopleArr) {
  let sumOfAge = people.reduce((sum, person) => sum += person.age, 0);
  return Math.round(sumOfAge / people.length);
}

console.log(`Average age is ${avgAge(people)}.`);

function fullName(peopleArr) {
  return peopleArr.map(person => {
    let middleName = person.name.middle ? ` ${person.name.middle} ` : ' ';
    return `${person.name.first}${middleName}${person.name.last}`;
  });
}

console.log(fullName(people));

function olderPeople(peopleArr, age) {
  return peopleArr.filter(person => person.age > age);
}

console.log(olderPeople(people, 26));
