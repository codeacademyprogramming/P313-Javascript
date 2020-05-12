// let p1 = new Object();
// p1.name = 'Name';
// p1.surname = 'Surname';

function rndNumber() {
    return 1;
}

const a = function () {
    return `${this.name} ${this.surname}`;
};

//camelCase
function rndNumberX() {
    return 'HELLO';
}

let p1 = {
    name: 'Name',
    surname: 'Surname',
    fullInfo: a
};

let p2 = {
    surname: 'Surname-1',
    name: 'Name-1'
};

// let persons = [p1, p2];

// persons.forEach(person => {

//     console.log(person.surname);

// });


// let btn = document.querySelectorAll('.toggle-button');
// let btn = document.querySelector('.navbar .toggle-button');
// let btn = document.querySelector('.navbar > .toogle-button');


//PascalCase
function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.fullInfo = function () {
        return `${this.name} ${this.surname}`;
    }
    this.getExperience = function () {
        return 5;
    }
}

let persons = Array(); // []
let per1 = new Person('Eli', 'Agayev');
let per2 = new Person('Anar', 'Agayev');

// console.log(`Name:${per1.name}`);
// console.log(`Surname:${per1.surname}`);

persons.push(per1);
persons.push(per2);


for (let key in per1) {
    // console.log(key);
    
    let value = per1[key];

    if (typeof value == 'function') {
        console.log(`${key}:${per1[key]()}`);
    }
    else
        console.log(`${key}:${value}`);
}

// for (let key of Object.keys(per1)) {

//     let value = per1[key];

//     if (typeof value == 'function') {
//         console.log(`${key}:${per1[key]()}`);
//     }
//     else
//         console.log(`${key}:${value}`);
// }

persons.push(new Person('Huseyn', 'Ebilov'));

// persons.forEach(person => {

//     console.log(person.fullInfo());

// });

// for(let person of persons)
// {
//     console.log(person);
// }



