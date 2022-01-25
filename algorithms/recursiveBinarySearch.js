const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function search(list, target) {
  const start = 0;
  const end = list.length - 1;
  const mid = Math.floor((start + end) / 2);
  if (list[mid] == target) {
    return;
  } else {
    if (list[mid] < target) {
      return search(list.slice(mid + 1), target);
    } else {
      return search(list.slice(0, mid), target);
    }
  }
}
search(arr, 8);
