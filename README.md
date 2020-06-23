# JS - More Fundamentals P2

## Exercise 1 - [Grubhub's "year in food" for 2018](https://www.insider.com/most-popular-foods-grubhub-2018-12)

```js
const mostPopularFood = [
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
```

The array holds a top-ten list of foods as ranked by Grubhub.

- #1 and #10 are missing
- #1 is 'bean burritos'
- #10 is 'buffalo-flavored cauliflower' (not kidding)

### STEP 1

Declare a function that has three parameters (the `arr`ay, `first` and `last`). This functions should place add first and last to the array, and return the fixed array. You will need to deal with that pesky `undefined` as well.

```js
const fixList = (arr, first, last) => {
  // magic
};
```

### STEP 2

Write a function that has one parameter (an `arr`ay) and outputs the elements of that array in a tidy top-ten fashion in the console.

```js
const printList = (arr) => {
  // this function should console the list in order
  // 1. bean burritos
  // 2. poke bowl
  // etc.
};
```

Don't forget to call the functions. It should look like this.

```js
printList(fixList(/* arguments needed */));
```

## Exercise 2 - Party Guests

```js
const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];
```

You have two arrays above of people who arrived late to your party and people who arrived early. Create a new array that holds all of the party attendees.

Write a function that has two parameters (`early` and `late`) that will combine the 2 arrays and output them in a tidy list from first to last arrival the console.

Call the functions with this line of code:

```js
printGuestOrder(earlyBirds, lateComers);
```

## Exercise 3 Revisit the List

In the very first exercise, you logged a top-10 list of foods:

```js
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
```

Let's log them again, but this time in alphabetical order.

When outputting a list item, output its ranking in brackets.

```bash
bean burritos (1)
buffalo-flavored cauliflower (10)
cauliflower rice bowl (7)
...
```

## Exercise 4

Write a function that takes an object as a parameter and returns a an array of two arrays. The first array contains the keys of the object and the second contains the values of the object.

```js
// Given
const anObj = { a: 'b', c: 'd', e: 'f' };

// the function returns
[
  [a, c, e],
  [b, d, f],
];
```

There is an object in the exercise file.

## Exercise 5

Write a function that accepts two parameters, an object and a key (string). The function returns the value of the key in the object.

```js
// Given
myFunc({ a: 'bee', c: 'dee' }, 'c');

// the function returns 'dee'
```

- Cases are provided for testing purposes.
- If the porvided key is not in the object, return 'not available'

## Exercise 6

Write a function that will return a new array of employee values, given a key. _very similar to Ex. 5_ but with a twist. This time you are provided with an array of objects.

```js
// Given
myFunc([{a: 'bee', c: 'dee'}, {a: 'zee': c: 'vee'}], 'a');

// the function returns ['bee', 'zee']
```

- Given the key `name`, your function should return an array of all the employee names.
- Given the key `title`, your function should return an array of all the titles.

Print the function returns to the console.

## Exercise 7

Write a function that will accept an object of food pairings and return an array of sentences (strings) that each look like this:

```
"With <FOOD_ITEM>, it is best to have <BEVERAGE>."
```

```js
// Given
const anObj = { aaa: 'bbb', ccc: 'ddd' };

// the function returns
['With aaa, it is best to have bbb', 'With ccc, it is best to have ddd'];
```

Afterwards, write a function that will take that array and print each string to the console one after another.

```bash
- With aaa, it is best to have bbb
- With ccc, it is best to have ddd
```

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

## Exercise 8

Back to the staff members from earlier.

Write a function that returns an array all of the employees with a javascript proficiency of 6 or more.

The array should contain the the comple object of each employee.

_`.filter()` might be the most efficient here._

### Stretch

Make the function generic. So that it can be used for any language, and proficiency level.

## Exercise 9 - Working with an array of objects.

_See the exercise file for the details._

## Exercise 10 - Shape Changing

One of the most common tasks as a software developer is to "transform" data from one form to another.

In this exercise, you're asked to transform data from the given shape to a new shape.

_See the exercise file for the details._

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

## Exercise 11 - Popular Desserts

_See the exercise file for all of the details._
