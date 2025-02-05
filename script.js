// Implementing myMap
Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Implementing myFilter
Array.prototype.myFilter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Implementing myReduce
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    if (this.length === 0) return undefined; // Edge case: empty array without initial value
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Sample Usage
const array = [1, 2, 3];
const mappedArray = array.myMap((value, i, arr) => value + i + arr[1]);
const filteredArray = array.myFilter((value, i, arr) => (value + i + arr[1]) > 5);
const reducedValue = array.myReduce((accumulator, value, i, arr) => accumulator + value + i + arr[1], 3);

console.log(mappedArray); // [3, 5, 7]
console.log(filteredArray); // [3]
console.log(reducedValue); // 18
