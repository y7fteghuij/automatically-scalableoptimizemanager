const countingSort = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = Array(max - min + 1).fill(0);
  for (let num of arr) {
    count[num - min]++;
  }
  let sortedIndex = 0;
  for (let i = min; i <= max; i++) {
    while (count[i - min] > 0) {
      arr[sortedIndex++] = i;
      count[i - min]--;
    }
  }
  return arr;
};
