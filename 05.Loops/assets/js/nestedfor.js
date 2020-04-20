// for (let i = 0; i < 3; i++) {

//     // if (i %== 2){

//     // }
//     for (let j = 0; j < 3; j++) {


//         console.log(i, j);
//     }


// }

// 9

// 1,3,9 


// 11
// 1,11

let say;
// 30  1 - 3 - 29  //sade deyil
for (let eded = 10; eded > 1; eded--) {
    say = 0;

    for (let j = 1; j < eded; j++) {

        console.log(eded + " ## " + j);
        if (eded % j == 0) {
            say++

            if (say == 2) {
                break;
            }
        }
    }
    console.log("####################");

    if (say < 2)
        console.log(eded);
}