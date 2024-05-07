const insertionSortRecursive = (arr, n = arr.length) => {
  if (n <= 1) {
    return arr;
  }
  insertionSortRecursive(arr, n - 1);
  const last = arr[n - 1];
  let j = n - 2;
  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
  return arr;
};
