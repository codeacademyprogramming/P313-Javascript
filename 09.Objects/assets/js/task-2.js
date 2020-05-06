let t = -1;
// null,undefined,0 is false

if (t) {
    console.log(`${t} is true`);
}
else {

    console.log(`${t} is false`);
}
// //variable function
// let a = function () {
//     return 'Hello';
// }

// let rndGuid = function () {
//     return Math.floor(Math.random() * 100);
// }




// console.log(p1.fullName(), typeof p1.fullName);


// function myFunction() {
//     console.log('myFunction Hello');
// }





// console.log(typeof a);



// let b = 3;

const a = function (obj) {
    if (obj) {
        return `${obj.name} ${obj.surname}`;
    }

    return `${this.name} ${this.surname}`;
}


//instance
let p1 = new Object();
p1.name = "Demo-1";
p1.surname = "Demo-Surname-1";
p1.fullName = a; // assign as function
p1.fullName2 = a(p1); // invoked a function

console.log(p1.fullName2); // property
console.log(p1.fullName()); // call function

//literal constructor
let x1 = {

}




