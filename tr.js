// var merge = function(nums1, m, nums2, n) {
//   nums1.length = m;
//   nums2.length = n;
//   const mergedArray = nums1.concat(...nums2);
//   const sortedArray = mergedArray.sort((a,b) => a - b);
//   return sortedArray;
// };

// // console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

var merge = function (nums1, m, nums2, n) {
  arguments[0].length = m
  arguments[0] = arguments[0].concat(...arguments[2]);
  arguments[0] = arguments[0].sort((a,b) => a - b);
  console.log(arguments);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// function mountain(arr) {
//   return arr.find((item, index, current) => index + 1 > current[index + 1]);
// }

// console.log(mountain([0,1,2,3,4,5,4,3,2,1,0]))
// console.log(mountain([0, 2, 1, 0]));
