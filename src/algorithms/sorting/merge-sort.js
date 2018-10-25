// tag::merge[]
/**
 * Merge two arrays in ascending order
 * @param {Array} array1
 * @param {Array} array2
 */
function merge(array1, array2 = []) {
  const mergedLength = array1.length + array2.length;
  const mergedArray = Array(mergedLength);

  for (let index = 0, i1 = 0, i2 = 0; index < mergedLength; index += 1) {
    if (i2 >= array2.length || (i1 < array1.length && array1[i1] <= array2[i2])) {
      mergedArray[index] = array1[i1];
      i1 += 1;
    } else {
      mergedArray[index] = array2[i2];
      i2 += 1;
    }
  }

  return mergedArray;
}
// end::merge[]

// tag::splitSort[]
/**
 * Split array in half until two or less elements are left.
 * Sort these two elements and combine them back using the merge function.
 * @param {Array} array
 */
function splitSort(array) {
  const size = array.length;

  if (size < 2) {
    return array;
  } else if (size === 2) {
    return array[0] < array[1] ? array : [array[1], array[0]];
  }

  const middle = Math.ceil(size / 2);

  return merge(
    splitSort(array.slice(0, middle)),
    splitSort(array.slice(middle)),
  );
}
// end::splitSort[]

// tag::sort[]
/**
 * Merge sort
 * Runtime: O(n log n)
 * @param {Array|Set} collection elements to be sorted
 */
function mergeSort(collection) {
  const array = Array.from(collection); // <1>
  return splitSort(array);
}
// end::sort[]

module.exports = mergeSort;
