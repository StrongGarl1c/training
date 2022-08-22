const arr = Array(1000).fill(1).map((item,index) => item += index )

function search(list, target) {
  let start = 0;
  let end = list.length - 1;
  let count = 1;

  while (start <= end) {
    count++;
    const mid = Math.floor((start + end) / 2);
    if (list[mid] == target) {
      return console.log(count)
    } else if (list[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

// console.time('bin');
search(arr, 7);
// console.timeEnd('bin');
