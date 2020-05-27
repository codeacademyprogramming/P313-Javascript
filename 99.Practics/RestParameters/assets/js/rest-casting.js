let numbers = document.querySelectorAll('#numbers > li');

console.log(numbers);

let numbersArr = [...numbers];
console.log(numbersArr);


let result = numbersArr.map(function(el){

    // console.log(el,index,coll);
    return el.textContent;
});

console.log(result);



// numbers.forEach(function(el){

//  console.log(el)

// });




// let myArr = [];
// numbers.forEach(function (el) {

//     // console.log(el.textContent);

//     myArr.push(el);

// });

// console.log(myArr);

// let result = myArr.map(function(el){
//     return el.textContent;
// });

// console.log(result);

// console.log('Testing map function');

// let result = numbers.map(function(el){
//     return el.textContent;
// });


// let persons = [{
//     id:1,
//     name:'Resul'
// },
// {
//     id:2,
//     name:'Talib'
// }];


// let result = persons.map(function(el){
//     return el.name;
// });

// console.log(result);
