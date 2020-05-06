/*
Aqil 
Ismayilov 
Hakim
Dogum Tarixi
Gender
*/

/*
Kamil 
Ismayilov 
Hakim
Dogum Tarixi
Gender
*/

// let a = ["Aqil", "Ismayilov", "Hakim",new Date('1990-01-01'),"Kisi"];
// let b = ["Kamil","Ismayilov", "Hakim",new Date('1990-01-01'),"Kisi"];

// console.log(`Adi:${a[0]}`);
// console.log(`Cinsi:${a[3]}`);


/*
Adi:
Qiymeti:
*/

function Test() {
    let a = 1;
    let t = [];
    let c = true;
    let d = "soz";
}


// const male = new Object(); //male instancedir
// male.id = 1;
// male.name = 'Male';


//literal constructor
let male = {
    id: 1,
    name: 'Male'
};

const female = new Object();
female.id = 2;
female.name = 'Female';



/*
name =>> Samsung Galaxy A30s DS (SM-A307) 
memory=>> 64GB 
color=>> White

x.fullInfo()

Samsung Galaxy A30s DS (SM-A307) 64GB White
*/
const _fullName = function () {
    return `${this.name} ${this.surname} ${this.patronymic} (${this.age})`;
    console.log(`${this.name} ${this.surname} ${this.patronymic} (${this.age})`);

};
let aqil = new Object();

aqil.patronymic = 'Hakim';
aqil.name = 'Aqil';
aqil.surname = 'Ismayilov';
aqil.age = 23;
aqil.militaryStatus = true;
aqil.foreignLanguages = ["English", "Rus"]
aqil.gender = male;
aqil.fullName = _fullName;//

console.log(aqil.fullName());

let kamil = new Object();

kamil.patronymic = 'Hakim';
kamil.name = 'Kamil';
kamil.surname = 'Ismayilov';
kamil.militaryStatus = false;
kamil.foreignLanguages = ["Rus"]
kamil.gender = male;
kamil.age = 21;
kamil.fullName = _fullName;


console.log(kamil);

let students = [
    aqil,
    kamil,
    {
        patronymic: 'Hakim',
        name: 'Ilqar',
        surname: 'Ismayilov',
        militaryStatus: false,
        foreignLanguages: ["Rus"],
        gender: male,
        age: 18,
        fullName: _fullName
    }
];

students.push({
    patronymic: 'Hakim',
    name: 'Fidan',
    surname: 'Ismayilova',
    militaryStatus: false,
    foreignLanguages: ["Rus"],
    gender: female,
    age: 25,
    fullName: _fullName

});

console.log(students);

for (let index = 0; index < students.length; index++) {
    const student = students[index];


    console.log(student.fullName());
}





/*
Samsung Galaxy A30s DS (SM-A307) 64GB White
*/