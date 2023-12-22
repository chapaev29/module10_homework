const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 1, 2, 3, 4, 5]
const hasDuplicates = (arr) => arr.length !== new Set(arr).size;
console.log(hasDuplicates(arr1))
console.log(hasDuplicates(arr2))