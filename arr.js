const myArray = [
  {
    charname: 'John',
    gender: 'Male',
    surname: 'Rose',
    salary: 100,
  },
  {
    charname: 'Margo',
    gender: 'Female',
    surname: 'Rose',
    salary: 1200,
  },
  {
    charname: 'John',
    gender: 'Male',
    surname: 'Rose',
    salary: 100,
  },
  {
    charname: 'Lisa',
    gender: 'Male',
    surname: 'Barcley',
    salary: 1600,
  },
  {
    charname: 'Lisa',
    gender: 'Male',
    surname: 'Barcley',
    salary: 1600,
  },
  {
    charname: 'Lisa',
    gender: 'Male',
    surname: 'Barcley',
    salary: 1600,
  },
  {
    charname: 'Margo',
    gender: 'Female',
    surname: 'Rose',
    salary: 1200,
  },
  {
    charname: 'Lisa',
    gender: 'Male',
    surname: 'Barcley',
    salary: 1600,
  },
];
//return full names
//return total salary
//return all names where surname is Rose
//Count number of unique surname

// full names
// const fullNames = myArray.map((elem) => `${elem.charname} ${elem.surname}`);
// console.log(fullNames);

// // total salary
// function red(total, value) {
//   return total + value.salary;
// }
// const totalSalary = myArray.reduce(red, 0);
// console.log(totalSalary);

// // name == rose
// const isRose = myArray.filter(
//   (elem) => elem.surname == 'Rose' && elem.charname,
// );
// console.log(isRose);

// // unique names
// const numberOfUniqeLastnames = () => {
//   const names = [];
//   for (let i = 0; i < myArray.length; i++) {
//     if (!names.some((elem) => elem == myArray[i].surname)) {
//       names.push(myArray[i].surname);
//     }
//   }
//   return names.length;
// };
// console.log(numberOfUniqeLastnames());

// let uniques = myArray.sort((a, b) => a.surname - b.surname)
//     .filter((value, index, array) => index === array.length - 1 || array[index + 1].surname!== value.surname);

// console.log(uniques.length); 


function count(arr, key) {
    let res = []; 
    arr.map(obj => obj[key])
        .filter(n => res.indexOf(n) <= -1 && res.push(n))
    return res.length;
}
console.log(count( myArray, 'surname'))