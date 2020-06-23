const favoriteDessertsGroupA = {
  scott: 'brownies',
  fred: 'tiramisu',
  lisa: 'chocolate cake',
  riley: 'ice-cream',
  sunny: 'cheese cake',
  john: 'ice-cream',
  beth: 'cheese cake',
  summer: 'ice-cream',
  morty: 'apple pie',
  rick: 'brownies',
  andrew: 'cheese cake',
  jerry: 'rhubard pie',
  'jean-luc': 'cheese cake',
  tiffany: 'waffles',
  melissa: 'profiteroles',
};

const favouriteDessertsGroupB = {
  alice: 'pie',
  betty: 'deep-fried mars bar',
  colin: 'gummy bears',
  damien: 'child tears',
  ellicia: 'panda express',
  fertrude: 'gummy bears',
  glinda: 'pie',
  hethel: 'not applicable',
  irsula: 'rum cake',
  judas: 'revenge (served cold)',
  khloe: 'pie',
  lyndon: 'easter eggs',
  minda: 'dessert',
};

// Exercise A

function getAllOccurencesOf(dessert, allDesserts) {
  return allDesserts.filter(d => d == dessert);
}

function countDesserts(group, allDesserts, uniqueDesserts) {
  let dessertCount =
    new Map(uniqueDesserts.map(dessert => {
      return [dessert, getAllOccurencesOf(dessert, allDesserts).length];
    }));

  return dessertCount;
}

function sortDessertsByPopularity(dessertObject) {
  let allDesserts = Object.values(dessertObject)
  let uniqueDesserts = [...new Set(allDesserts)];

  let dessertCount = countDesserts(dessertObject, allDesserts, uniqueDesserts);

  return uniqueDesserts.sort((dessertA, dessertB) => {
    return dessertCount.get(dessertA) - dessertCount.get(dessertB);
  });
}

console.log(
  'Popular desserts in Group A:',
  sortDessertsByPopularity(favoriteDessertsGroupA)
);
console.log(
  'Popular desserts in Group B:',
  sortDessertsByPopularity(favouriteDessertsGroupB)
);

/*
Exercise B

Expected output for Group B:

{
  'pie': [ 'alice', 'glinda', 'khloe' ],
  'deep-fried mars bar': [ 'betty' ],
  'gummy bears': [ 'colin', 'fertrude' ],
  'child tears': [ 'damien' ],
  'panda express': [ 'ellicia' ],
  'not applicable': [ 'hethel' ],
  'rum cake': [ 'irsula' ],
  'revenge (served cold)': [ 'judas' ],
  'easter eggs': [ 'lyndon' ],
  'dessert': [ 'minda' ]
}
*/

function groupPeopleByDessert(dessertObject) {
  return Object.keys(dessertObject).reduce((total, name) => {
    let dessert = dessertObject[name];

    total[dessert] ? total[dessert].push(name) : total[dessert] = [name];
    return total;
  }, {});
}

console.log(
  'People grouped by dessert:',
  groupPeopleByDessert(favouriteDessertsGroupB)
);
