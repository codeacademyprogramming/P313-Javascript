// //CONDITIONAL OPERATORS

// /*
// ==
// === //type yoxlanilir
// !=
// !==  //type yoxlanilir

// >
// <
// >=
// <=

// */

// // let a = 5; // number
// // let b = '4'; // number
// // let c = 8;
// // let result;

// // result = (a == b);

// // result = (a === b);  //hemcinin type yoxlanilir

// // result = a!=b;
// // result = a!==b;

// // result = a >= b;

// /*
// 3 teref verilib
// ve bu 3 parcadan ucbucaq qurmaq olar ya yox?

// a+b > c
// b+c > a
// a+c > b
// */
// /*
// &&
// ||

// */

// // //her 3 sert dogru olmalidi
// // result = (a + b > c) && (b + c > a) && (a + c > b);
// // //3  sertden biri dogru olmalidi
// // result = (a + b > c) || (b + c > a) || (a + c > b);

// // result = ((a + b > c) && (b + c > a))  || (a + c > b);



// // console.log(result);



// //CONDITIONAL STATEMENTS

// /*

// // bool : true , false
// if(sert){
//     sert odenilse ishleyecek blok
//     // sureti artiriram
// }
// //


// //------------------------
// if(sert){
//     sert odenilse ishleyecek blok
// }

// else
// {
//     sert odenilmese ishleyecek blok
// }
// //-------------------------------

// if(sert-1)
// {

// }

// else if(sert-2)
// {

// }

// else if(sert-3)
// {

// }

// else if(sert-4)
// {

// }

// else if(sert-5)
// {

// }

// else
// {
//     sert odenilmese ishleyecek blok
// }
// */

// let a = 10;
// let b = 10;

// // if ( a > b )
// // {
// //     console.log('a b-den boyukdur');
// // }

// // if ( a > b )
// // {
// //     console.log('a b-den boyukdur');
// // }
// // else
// // {
// //     console.log('a b-den kicikdir');
// // }


// // if (a > b) {
// //     console.log('a b-den boyukdur');
// // }
// // else if (a == b) {
// //     console.log('a b-e beraberdir');
// // }
// // else {
// //     console.log('a b-den kicikdir');
// // }

// a = 1;
// let result;
// // if (a == 1) {
// //     result = 'bir';
// // }
// // else if (a == 2) {
// //     result = 'iki';
// // }
// // else if (a == 3) {
// //     result = 'uc';
// // }
// // else if (a == 4) {
// //     result = 'uc';
// // }
// // else {
// //     result = 'nezere alinmayib';
// // }

// a = '1';

// //20200410
// //10 aprel 2020-ci il
// //10 aprel 2019-cu il
// //2013-cu il
// //2000 ci
// //2001

// //===
// switch (a) {
//     case 1: //a===1
//     case 2: //a===2
//     case 3:
//         result = `ireli speed(${a * 100})`;
//         break;
//     case 4:
//     case 5:
//     case 6:
//         result = `geri speed(${(a - 3) * 100})`;
//         break;
//     default:
//         result = 'nezere alinmayib';
//         break;
// }

// let c;


// /*
//   eger a hem b-den hem c-den boyukdurse => 
//   test1 sozunu cap et

//   eger a b-den boyuk c-den kicikdirse test2

//   eger a b ve c-den kicikdirse onda test3 cap ele

//   eks halda nezere alinmayib cap olunsun
// */
// // true  => false
// // false => true

// // const x = ()=>{
// //     console.log('called x');
// // }

// a = 1;
// b = 2;
// c = 2;
// if (!(a > b && a > c)) {
//     console.log('test1');
// }
// else if (a > b && a < c) {
//     console.log('test2');
// }
// else if (a < b && a < c) {
//     console.log('test3');
// }
// else {
//     console.log('nezere alinmayib');
// }

// //nested

// /*
// eger a ededi 10-dan boyukdurse
// onda b ededi musbetdirse
// bni 2ye vurub c ile toplamaq

// eger a ededi 10-a beraberdirse 
// ve b ededi menfidirse
// cni 2ye vurub b ile yoplamaq

// eger a ededi 10-a beraberdirse 
// b 0-dirsa 
// a+b ni tapmaq

// a 10-dan kicikdirse

// b ve c bir birine beraberdirse (a+b)^2
// .
// .
// .
// */
// if (a > 10) {
//     if (b > 0) {
//         result = b * 2 + c;
//     }
//     else if (b < 0) {
//         result = c * 2 + b;
//     }
//     else {
//         result = a + b;
//     }
// }
// else {
//     if (1 == 1) {

//     }
// }

// let loggedIn;

// loggedIn = 1;
// if (loggedIn == 1) {
//     console.log('xosh gelmisiniz');
// }


// // // 10%10 1(0)
// // x%2 =y(0)
// // // console.log(result);

// let a;
// a = 10;

// let result = a % 2;
// // let qaliq = a % 2;  // 0 

// if (result == 0) {
// //cons
// }
// else {

// }






/*
        3.İki ədəd verilib. Birinci ədəd əgər ikinciyə tam bölünürsə cavabı,
        bülünmürsə "bölünmür" sözünü çap edin.
*/

let a, b, c;
a = 8;
b = 2;

//c = a / b;  //tam bolunurse qaliq 0 olmalidi

if (a % b == 0) {
    let cavab = a / b;
    // console.log(cavab);
}
else {  //c !=0

}



//c 0
//c != 0


a = 3457;


let cavab = a % 10;
a = (a - cavab) / 10;  //345
console.log(cavab, a);

cavab = a % 10;
a = (a - cavab) / 10;  //34
console.log(cavab, a);


cavab = a % 10;
a = (a - cavab) / 10;  //3
console.log(cavab, a);

cavab = a % 10;
a = (a - cavab) / 10;  //0
console.log(cavab, a);

//------------------------------
a = 3457;

//  
a = Math.floor(a / 1000) % 10;

console.log(a);




