const arr = Array(1000000).fill(1).map((item,index) => item += index )

function search(list, target) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] == target) {
      return true
    } else if (list[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.time('bin');
search(arr, 400000);
console.timeEnd('bin');
