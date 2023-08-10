const { exec, execSync } = require('child_process');

// exec("npm run sec", (err,out,thir) => {
//     try {
//         console.log(1,out);
//         // console.log(2,thir)
//     } catch (error) {
//         console.log(3,err)
//         console.log(4,error)
//     }
// });

execSync('npm run sec')

console.log('there')