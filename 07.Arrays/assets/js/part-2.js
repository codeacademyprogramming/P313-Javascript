let a1 = Array(1, 2, 3);
let a2 = Array();
a2.push(11);
a2.push(12, 13);

let a3 = [123, 234, 456];

console.log('a1: ', a1);
console.log('a2: ', a2);
console.log('a3: ', a3);



// let cavab = a1.concat(a2);
let cavab = a2.concat(a1);

// console.log('a2+a1: ', cavab);
//-----------------------------------
cavab = a1.concat(a2, a3);

// console.log('(a1+a2+a3): ', cavab);

// cavab.reverse();

// console.log('reversed (a1+a2+a3): ', cavab);
//-----------------------------------
// cavab = a1.concat();

// console.log('a1: ', cavab);
//-----------------------------------
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // copy to index 0 the element at index 3
// console.log(array1.copyWithin(0,1));

// let joined_a1 = a1.join('');
// console.log(`joined_a1: ${joined_a1}`);


// let str = 'Hezi Aslanov';

// str = str + " ";
// setInterval(() => {
//     let str_arr = str.split('');

//     // let str_temp = '';
//     let firstLetter = str_arr.shift();
//     str = str_arr.join('') + firstLetter;

//     // for (let i = 1; i < str_arr.length; i++) {
//     //     str_temp += str_arr[i];
//     // }
//     // str_temp += str_arr[0];

//     // str = str_temp;

//     document.getElementById('monitor').innerHTML = str;

// }, 300);



//    0  1  2
a1 = [3, 1, 2];


// console.log(a1);

// let temp;
// //   3    > 1
// if (a1[0] < a1[1]) {
//     temp = a1[0];
//     a1[0] = a1[1]; //replace a1[0]
//     a1[1] = temp; //replace a1[1]
// }

// console.log(a1);

// if (a1[1] < a1[2]) {
//     temp = a1[1];
//     a1[1] = a1[2]; //replace a1[1]
//     a1[2] = temp; //replace a1[2]
// }

// console.log(a1);
a1 = [3, 1, 2, 4];

console.log(a1);

a1[1] = -1;

a1[4] = 11;
/*

*/
a1[77] = 71;

// let temp;
/*
a1[0+1] 1
a1[1+1] 2
a1[2+1] 3
*/
// for (let index = 0; index < a1.length - 1; index++) {

//     console.log(a1[index + 1]);

//     if (a1[index] < a1[index + 1]) {
//         temp = a1[index];
//         a1[index] = a1[index + 1]; //replace a1[1]
//         a1[index + 1] = temp; //replace a1[2]
//     }
// }

// console.log(a1);




// console.log(a1);
// delete a1[1];
// console.log(a1);






// a1.forEach((el,index) => {
//     console.log(el,index);
// });

// for (let index = 0; index < a1.length; index++) {
//     const element = a1[index];
//     console.log(element, index);
// }



let language = 'Javascript,ShellScript';

let telNoPattern = /\d{3}-\d{3}-\d{2}-\d{2}/g;

let telNo = '050-222-12-43';

if (telNoPattern.test(telNo)) {
    console.log(`${telNo} - nomredir`);
}
else {
    console.log(`${telNo} - nomredeyil`);
}

//Regex
language = language.replace(/script/gi, '');

console.log(language);




