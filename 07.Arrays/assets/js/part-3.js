let a1 = [9, 3, 1, 4, 5, 6, 34];

console.log('a1:  ', a1);
// let deleted = a1.splice(2,3);
// console.log('deleted:  ', deleted);
let copyOfPart = a1.slice(1, 3); //1 daxildir,3 daxil deyil,,, index olaraq
console.log('copyOfPart:  ', copyOfPart);
console.log('a1:  ', a1);

// let metn = 'bina 1 menzil 23';
// let arr_metn = metn.split('');

// let filteredNumbers = arr_metn.filter(function (value, index, arr) {
//     let result = false;

//     if (value != ' ')
//         result = !isNaN(value.trim());

//     return result;
// });
// console.log(filteredNumbers);


// let filteredArray = a1.filter(function (value, index, arr) {
//     let result = false;
//     // console.log(value, index, arr);

//     if (value % 2 == 0)
//         result = true;


//     return result;
// // });
// console.log('filteredArray:  ', filteredArray);
// console.log('a1:  ', a1);





let numbers = [-19, 1, 2, -3, 4, 0, -1];

// let result = [];

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];

//     if (element < 0)
//         result.push(element);

// }

// let result = numbers.filter(function (v, i, arr) {

//     // let r = false;
//     // if (v < 0)
//     //     r = true;

//     // return r;
//     return v < 0;

// });

/*
Adi
Kategoriya
AgeStart:3
AgeEnd:5

*/


let result = numbers.filter((v, i, arr) => {
    // let r = false;
    // if (v < 0)
    //     r = true;

    // return r;
    return v < 0;
});

console.log(result);

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

let fruilts = ["Alma", "Heyva", 'Nar', `Gilas`];

console.log(fruilts);

// let j_fruilts = fruilts.join();
// let j_fruilts = fruilts.toString();
// let j_fruilts = fruilts.join('#1#');
// console.log(j_fruilts);


fruilts.filter((v, i, arr) => {

    arr.insert(i, `${i + 1}.`);

    return true;

})

let joined = fruilts.join(',');

console.log(joined);

[2, 3, 4]  |  [4, 3, 2]

