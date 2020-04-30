function info(callbackFn) {

    if (typeof callbackFn == 'function')
        callbackFn();
    else {
        console.log(`is not function.Value is : ${callbackFn}`);
    }

}

function demoFn() {
    console.log('bu bir normal adli funksiyadir');

    // return 'demoFn-den qayidan cavab';
}


// info(1); // funksiya gondermedim deye icra edilmeyecek
// info(function () { // anonymous function
//     console.log('callback kimi anonim funksiya gonderilib');
// });

// info(() => {
//     console.log('callback kimi arrow funksiya gonderilib');
// });


info(demoFn);

// let cavab = demoFn();
// info(cavab);




// // let b1 = [1, 2, 3, 4, 5];


// // console.log(b1);

// // while (b1.length > 0) {
// //     // let el = b1.pop();//stack== LIFO
// //     let el = b1.shift();//stack== FIFO
// //     console.log(`array length: ${b1.length}, el: ${el}`);
// // }

// // let i = 4;
// // b1[i]  //b1[0]
// // i++;
// // b1[i]  //b1[1]
// // i++;
// // b1[i]  //b1[2]

// let b1 = [1, 2, 3, 4, 5];

// // let i = b1.length - 1;
// // while (i >= 0) {
// //     console.log(b1[i]);
// //     i--;
// // }

// // for (let i = 0; i < b1.length; i++) {

// // }


// for (let i = b1.length - 1; i >= 0; i--) {
//     console.log(b1[i]);
// }


// /*
// 2.Mesele
//  index istifade etmeden massivden elementlerin sonuncu elementden
//  ilk elemente dogru ardicil console-vasitesi ile cap edilmesi
//  hints: #while#pop#shift

//  [11,32,12,56]
//  56
//  12
//  32
//  11
// */