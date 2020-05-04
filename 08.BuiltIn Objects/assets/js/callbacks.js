/*
number
string
boolean


arrays
object

function
 */

let a = 5;

let fa = function () {
    alert('Salam');
}

function info(p) {

    if (typeof p == "function") {
        p(); //funcksiyani ishledir
    }
    else
        console.log(p);

}
// info(a);

info(fa)  //callback



// function alert(p) {

//     console.log(p);

// }

