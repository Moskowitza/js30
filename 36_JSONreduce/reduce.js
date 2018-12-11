// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const result0 = array1.reduce(reducer, [1]);
// console.log(result0); // 10
// const result1 = array1.reduce(reducer, []);
// console.log(result1); // 1234 as a string

const maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
const maxCallback2 = (max, cur) => Math.max(max, cur);

// reduce() without initialValue
const result3 = [{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
console.log(result3);
const result4 = [{ x: 22 }].reduce(maxCallback); // { x: 22 }
console.log(result4);
// [].reduce(maxCallback); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
const result5 = [{ x: 22 }, { x: 42 }, { x: 62 }, { x: 82 }].map(el => el.x);
const result6 = result5.reduce(maxCallback2, -Infinity);

console.log(result5);
console.log(result6);

const result7 = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) => accumulator + currentValue
);
console.log(result7); // 10
const result8 = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) => accumulator + currentValue,
  10
);
console.log(result8); // 20

// USE OF ARROW FUNCTION for implicit return
// var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0);

const total = [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);

/* ******** */
const initialValue = 0;
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);
// Flatten an array of arrays
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(`flattened ${flattened}`);
// Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(`countedNames ${JSON.stringify(countedNames)}`);
