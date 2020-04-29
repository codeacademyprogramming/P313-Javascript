'use strict';

// let a = 12;
// var a = 0;

// let a;

// let a = 5;




// //declaration,define function
// function test() {
//     //a = 14; //default declaration =>> global scope
//     //var a = 0;
//     console.log('function scope a: ' + a);
// }


// // console.log('global scope a: ' + a);


let a = 13;
// a = 10;

function demo() {

    function childDemo() {
        console.log('>>childDemo<<');
    }


    let a = 10;
    //const b = 10;
    console.log(a);

    // childDemo();



}



// console.log(b);
// childDemo();//error