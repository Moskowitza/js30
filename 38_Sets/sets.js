const set1 = new Set([1, 2, 4, 5, 6, 8]);
const set2 = new Set([2, 5, 7, 9, 3, 1]);

/* 
intersection: ESLINT hates this
iterators/generators require 
regenerator-runtime, which is too heavyweight 
for this guide to allow them.
 Separately, loops should be avoided in favor of 
 array iterations. 
*/
// const intersection = new Set();
// for (const item of set1) {
//   if (set2.has(item)) {
//     intersection.add(item);
//   }
// }
// console.log(intersection);

// 1 make a copy of set 1
const arr = [...set1];
// 2 filter it across set2
const filteredArr = arr.filter(a => set2.has(a));
// 3 make new Set
const intersection = new Set(filteredArr);
console.log(intersection);
// 4 in one line
const slim = new Set([...set1].filter(a => set2.has(a)));
console.log(slim);

/*
Difference
This should be the same but opposite of the intersection
*/
const diff = new Set([...set1].filter(a => !set2.has(a)));
console.log(diff);
