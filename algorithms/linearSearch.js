const arr = Array(1000000).fill(1).map((item,index) => item += index )

function search(array, target){
  for(let i = 0; i < array.length; i++){
    if(array[i] == target){
      return true
    }
  }
  return false
}

console.time('lin');
search(arr, 400000);
console.timeEnd('lin')
