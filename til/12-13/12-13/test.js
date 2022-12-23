const one = null === undefined      // false
const two = null ==  undefined      // true

const three = isNaN(1 + null)         // false
const four = isNaN(1 + undefined)    // true

console.log(one);
console.log(two);
console.log(three);
console.log(four);