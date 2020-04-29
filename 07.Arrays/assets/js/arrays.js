// function asc(a, b) {
//     return a - b;
// }

// function desc(a, b) {
//     return b - a;
// }

//simple parameters, value types
let a = 5;   //number
let b = '5'; //string
let c = false; // boolean


//b1 - 5+1 | 2,11,19,30,3,8
//b2 -     | 3,11,0,12,4,99

// let b1_1 = 2;
// let b1_2 = 11;

//complex parameters, referance types
let b1 = [2, 11, 19, 30, 3, 8];
let b2 = [3, 11, 0, 12, 4, 99];



// -------------   stack with array -------------
let b3 = [];
b3.push(1);
b3.push(2, 4, 5, 6, 7);
b3.push(11);
console.log(b3);

let el = b3.pop();
console.log(el);

el = b3.pop();
console.log(el);
// -------------


// -------------   queue with array -------------
let b4 = [];
// b4.push(1);
// b4.push(2, 4, 5, 6, 7);
// b4.push(11);
b4.unshift(1);
b4.unshift(2);

b4.unshift(3, 4);
// b4.unshift(3, 4);
b4.unshift(13);

console.log('Queue: >> ', b4);


let queueEl = b4.shift();
// console.log(queueEl);

// -------------

// let b5 = [1,2];

let b5 = Array(13, 1, 0, 12, 55, 4);


// callback
// b5.sort(function (a, b) { //anonymous function
//     return b - a;
// }).reverse();
console.log(b5);
b5.forEach((value, index) => {//arrow function
    console.log(value, index);
});

b5.forEach(function (value, index) {//anonymous function
    console.log(value, index);
});

let x = 0000000;

//12321
//12321

let x1 = [1, 2, 1]
let y1 = [1, 2, 1]

if (x1.toString() == y1.toString()) {
    console.log('polindrom');
}
else {
    console.log('polindrom deyil');
}

//false / true
//functions


//###################################################
/*
1.Mesele
ededin polindrom olub olmamagini ,push ve unshift methodlarindan istifade ederekden yoxlamaq (kodu tamamlayin)

function isPolindrom(eded){
let x1 = [];
let y1 = [];

.
.
.


if (x1.toString() == y1.toString()) {
   return true;
}

return false;
}
------------------------------------

2.Mesele
 index istifade etmeden massivden elementlerin sonuncu elementden
 ilk elemente dogru ardicil console-vasitesi ile cap edilmesi
 hints: #while#pop#shift

 [11,32,12,56]
 56
 12
 32
 11

3.Mesele
 index istifade etmeden massivden elementlerin ilk elementden
 sonuncu elemente dogru ardicil console-vasitesi ile cap edilmesi
 hints: #while#pop#shift

 [11,32,12,56]
 11
 32
 12
 56

4.Mesele
 while dovr operatorundan istifade etmekle massivden elementlerin ilk elementden
 sonuncu elemente dogru ardicil console-vasitesi ile cap edilmesi.


 [11,32,12,56]
 11
 32
 12
 56
 
*/


// let array = [1,1,121]


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }








// b5.reverse();
// b5.push(1);
// b5.push(2);
// b5.push(3);

// console.log(b5);




// let _3cuelement = b1[2];
// console.log(_3cuelement);

// for (let i = b1.length - 1; i >= 0; i--) {
//     console.log(b1[i]);
// }

