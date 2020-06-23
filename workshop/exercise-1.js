let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

function fixList(arr, first, last) {
  let newArr = [...arr];

  newArr.unshift(first);
  newArr.pop();
  newArr.push(last);

  return newArr
}

function countdown(arr) {
  arr.forEach((food, index) => {
    console.log(`${index + 1}. ${food}`);
  });
}

countdown(
  fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower')
);
