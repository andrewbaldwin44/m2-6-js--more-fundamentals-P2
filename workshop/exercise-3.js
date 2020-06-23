let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

function sortAlphabetically(list) {
  return [...list].sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    else return 0;
  }).forEach(item => {
    let rank = mostPopularFood.indexOf(item);
    console.log(`${item} (${rank + 1})`)
  });
};

sortAlphabetically(mostPopularFood);
