let n = 10;


let i = 0;

//ön şərtli dövr operatoru

// while (i < n) {
//     console.log(i);
//     i++;
// }

//son şərtli dövr operatoru
// do {
//     console.log(i);
//     i++;
// }
// while (i < 2);

// for (let i = 0; i < n; i++) {

// }




// for (let index = 0; index < 100; index++) {

//     if (index == 50)
//         break;


//     console.log(index);


// }


// for (let index = 0; index < 100; index++) {

//     if (index >= 50 && index <= 80)
//         continue;

//     console.log(index);


// }

// n = 100;
// while (i < 100) {
//     console.log(i);
//     i++;
//     if (i == 50)
//         break;
// }

//123

// let pwd;
// //pwd = prompt('sifre daxil edin', '123');


// while (pwd != '123') {
//     pwd = prompt('sifre daxil edin', '123');
// }



///
let tryCount = 3;
let pwd, block = false;
do {
    if (tryCount < 1) {
        block = true;
        break;
    }

    pwd = prompt('sifre daxil edin', '123');
    console.log(pwd, tryCount);
    tryCount--;
    //

}
while (pwd != '123');

if (block == true) {
    console.log('sizin hesabiniz blok olunub');
}
else {
    console.log('sisteme xosh gelmisiniz');

}