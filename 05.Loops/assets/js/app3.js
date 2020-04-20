let a = 324;

// let _a = a.toString();

// console.log(_a.length);


let cem = 0;

//123
// say = 0;
// let b = a;
// while (i < 10) {
//     b = Math.floor(b / 10);
//     say++;
//     i++;
// }


// while (re) {
//     break;
// }

while (a > 0) {
    let reqem = a % 10;
    cem += reqem;
    a = Math.floor(a / 10);
}

console.log(cem);