function myPrint() {
    let a = 3;//function scope
    console.log(`function scope-deki a: ${a} | before`);
// let a=13; error olacaq

    if (true) {
        let a = 13;
        console.log(`block scope-deki a: ${a}`);
    }
    
    console.log(`function scope-deki a: ${a} | after`);
}




//global scope
// var a = 12;
console.log(`global scopdaki a: ${a}  | before `);

myPrint();

console.log(`global scopdaki a: ${a}  | after`);

/*
12
3
?
 */


//block scope

while (1 != 1) {
//block scope
}

if (1 == 1) {
    let a = 13; //block scope

}


