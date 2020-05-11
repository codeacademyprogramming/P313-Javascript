let studentId = 1;

function Student(name, surname) {
    this.id = studentId++;
    this.name = name;
    this.surname = surname;

    // studentId++
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let p313 = new Array();

let s1 = new Student('Gülmirə', 'Qurbanova');
p313.push(s1);

p313.push(new Student('Şəmil', 'Əsədov'));
p313.push(new Student('Xalid', 'Rəcəbov'));
p313.push(new Student('Vüqar', 'Quliyev'));
p313.push(new Student('Qumral', 'Əsgərzadə'));
p313.push(new Student('Orxan', 'Kərimli'));
p313.push(new Student('Zakir', 'Rəhimli'));
p313.push(new Student('Tamerlan', 'Bədəlov'));
p313.push(new Student('Tural', 'Quliyev'));
p313.push(new Student('Elvin', 'İbrahimov'));
p313.push(new Student('Şamil', 'Məmmədov'));
p313.push(new Student('Rüfət', 'İmanlı'));
p313.push(new Student('Mehrac', 'Ələkbərov'));
p313.push(new Student('Leyla', 'Məmmədova'));
p313.push(new Student('Firuzə', 'Məmmədova'));


// let rndIndex = getRndInteger(0, p313.length - 1);

// let selectedStudent = p313[rndIndex];
// let studentBulk = localStorage.getItem('selectedStudent');

let p313_ls = new Array();

let studentBulk = localStorage.getItem('selectedStudent');

if(studentBulk!=null)
{
    p313_ls = JSON.parse(studentBulk);
}
// let selectedIds = p313_ls.map(e=>e.id);
let selectedIds = p313_ls.map(function(e){
    return e.id;
});

//filterlenmish
let newStudents = p313.filter(function(value){
    return selectedIds.indexOf(value.id)==-1;
});


let rndIndex = getRndInteger(0, newStudents.length - 1);

let selectedStudent = newStudents[rndIndex];

// if (studentBulk != null) {
//     // let student = JSON.parse(studentBulk);

//     // while(selectedStudent.id == student.id)
//     // {
//     //     console.log(`Eyni telebe secildi: ${selectedStudent.name}`);
//     //     rndIndex = getRndInteger(0, p313.length - 1);
//     //     selectedStudent = p313[rndIndex];
//     // }
// }
// if()

if(selectedStudent!=null)
p313_ls.push(selectedStudent);

studentBulk = JSON.stringify(p313_ls);
// sessionStorage
localStorage.setItem('selectedStudent',studentBulk);

console.log(selectedStudent);
