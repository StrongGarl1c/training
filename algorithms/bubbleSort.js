const arr = [20, 91, 64, 75, 19, 26, 48, 55, 89];

function bubbleSort(array) {
  let iterations = 0;
  let isSorted = false;

  function sor() {
    iterations++;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const cache1 = array[i];
        const cache2 = array[i + 1];
        array[i] = cache2;
        array[i + 1] = cache1;
        return (isSorted = false);
      }
    }
    return (isSorted = true);
  }

  while (!isSorted) {
    sor();
  }

  console.log(iterations);
  console.log(arr);
}

bubbleSort(arr);
