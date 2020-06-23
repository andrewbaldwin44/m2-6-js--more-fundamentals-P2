let inputData = {
  name: 'Will Byers',
  age: 9,
  status: 'upside down',
  superpower1: 'can-blink-lights',
  superpower2: null,
  address1: '123 Whatever street',
  addressCity: 'Hawkins',
  addressState: 'Indiana',
  addressCountry: 'United States',
  motherName: 'Joyce Byers',
  motherAge: 35,
  motherStatus: 'worried',
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: 'Mike Wheeler',
  bestFriendAge: 9,
  bestFriendStatus: 'frenetic',
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: 'Eleven',
  girlfriendAge: 9,
  girlfriendStatus: 'angry',
  girlfriendSuperpower1: 'telepathy',
  girlfriendSuperpower2: 'multiverse portal sealing',
};

function getAddressData() {
  let addressData = {};

  addressData.streetAddress = inputData.address1;
  addressData.city = inputData.addressCity;
  addressData.state = inputData.addressState;
  addressData.country = inputData.addressCountry;

  return addressData;
}

function getSuperPowers(relationship = '') {
  let superPowers = [];

  let firstChar = relationship === '' ? 's' : 'S'

  for (let i = 0; i < 2; i++) {
    let superpower = inputData[`${relationship}${firstChar}uperpower${i + 1}`];


    if (superpower) superPowers.push(superpower);
  }

  return superPowers;
}

function getPerson(relationship) {
  let person = {};

  person.type = relationship;
  person.name = inputData[`${relationship}Name`];
  person.age = inputData[`${relationship}Age`];
  person.status = inputData[`${relationship}Status`];
  person.superPowers = getSuperPowers(relationship);

  return person;
}

function getRelationshipData() {
  let relationships = [];

  relationships.push(getPerson('mother'));
  relationships.push(getPerson('girlfriend'));

  return relationships;
}

function transformData(data) {
  let output = {};

  output.name = inputData.name;
  output.age = inputData.age;
  output.status = inputData.status;
  output.address = getAddressData();
  output.superpowers =  getSuperPowers();
  output.relationships = getRelationshipData();

  return output;
}

console.log(JSON.stringify(transformData(inputData), null, 2));
