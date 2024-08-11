const array = [10, 1, 3, 4, 4, 10, 5, 5];

const returnSortedArrayWithUniqueElems = (numArray) => {
  return Array.from(new Set(numArray)).sort((a, b) => a - b);
};

console.log(returnSortedArrayWithUniqueElems(array));
