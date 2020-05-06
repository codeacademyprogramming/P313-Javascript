
// myFunction();

//named functions
function myFunction() {
    //console.log('hello Javascript!');

    return new Date().getFullYear();
}

myFunction()


//variable function
const fn1 = function () {
    console.log('Called Variable function!');

    // return new Date().getFullYear();
}



function callAnotherFn(a) {
    console.log(a);

    if (typeof a == 'function')
        a();//invoke function,    // a is callback function
}


callAnotherFn(myFunction);  // callback as named fanction

callAnotherFn(fn1);  //callback as variable function

callAnotherFn(function () {
    console.log('Vaxt:' + Date());
});  //callback as anonymous function 

callAnotherFn(() => {
    console.log('Vaxt:' + Date());
});  //callback as arrow function 


let genders = ["Male", "Female"];

// function fillGenders(value) {

// }

genders.forEach(function (value, index, arr) {
    /*
    
    .
    .
    .
    .
    .*/
});

genders.forEach(value => {
    /*
    
    .
    .
    .
    .
    .*/
});



/*
funksiya eger yalniz 1 defe istifade olunacaqsa onda arrow,anonymous


yazacagimiz funksiya cox istifade olunur

ama 1 js faylda, bashqa fayllarda istifade olunmur
onda hem 'variable' hem de 'named function' istifade etmek olar

1 proyektde her yerde iftifade edecemse
'named function' istifade etmek duzgun olar

*/






















