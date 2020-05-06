//literal constructor
const _fullName = function () {
    return `${this.name} ${this.surname} ${this.patronymic} (${this.age})`;
    console.log(`${this.name} ${this.surname} ${this.patronymic} (${this.age})`);

};

const male = 'Kisi';
const female = 'Qadin';

let aqil = new Object();

aqil.patronymic = 'Hakim';
aqil.name = 'Aqil';
aqil.surname = 'Ismayilov';
aqil.gender = male
aqil.fullName = _fullName;//
aqil.age = 18;

console.log(aqil.fullName());

let kamil = new Object();

kamil.patronymic = 'Hakim';
kamil.name = 'Kamil';
kamil.surname = 'Ismayilov';
kamil.gender = male;
kamil.fullName = _fullName;
kamil.age = 22;

let students = [
    aqil,
    kamil,
    {
        patronymic: 'Hakim',
        name: 'Ilqar',
        surname: 'Ismayilov',
        gender: male,
        fullName: _fullName,
        age: 23
    }
];

students.push({
    patronymic: 'Hakim',
    name: 'Fidan',
    surname: 'Ismayilova',
    gender: female,
    fullName: _fullName,
    age: 20
});

students.forEach(student=>{
    console.log(student.fullName());
});

let filtered = students.filter(function (value, index, arr) {
    // console.log(value);
    return value.age > 20;
});

// let numbers = [22, 20, 18, 23];
let sorted = students.sort(function (a, b) {
    return a.age - b.age;
});

console.log('######SORTED######');
sorted.forEach(student=>{
    console.log(student.fullName());
});

// let filtered = students.filter(function (value, index, arr) {
//     return value.gender == male;
// });

console.log(sorted);