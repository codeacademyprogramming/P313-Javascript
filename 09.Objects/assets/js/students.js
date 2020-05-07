/*
   sessionStorage   // property
   localStorage     // property
   JSON.stringfy()  // function
   JSON.parse();    // function
   [].map()         // function
*/

let studentId = 1;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//extension method
Number.prototype.toString2 = function (length) {
    let value = this;
    let _len = length - value.toString().length;

    if (_len > 0) {
        return `${'0'.repeat(_len)}${value}`;
    }
    return value.toString();
}

//20200507

function getToday() {
    let now = new Date();

    let date = `${now.getFullYear()}${(now.getMonth() + 1).toString2(2)}${(now.getDate() - 1).toString2(2)}`;
    return date;
}


function Student(name, surname) {
    this.id = studentId++;
    this.name = name;
    this.surname = surname;

    // studentId++
}

let p313 = Array();

p313.push(new Student('Gülmirə', 'Qurbanova'));
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

console.log(p313);


let luckyStudentsBulk = sessionStorage.getItem('luckyStudents');
let luckyStudents;

if (luckyStudentsBulk == null) {
    luckyStudents = Array();
}
else {
    luckyStudents = JSON.parse(luckyStudentsBulk);
}

function onLoad() {

    //return array
    let todaySelected = luckyStudents.filter(function (value) {
        return value.date == getToday();
    });

    if (todaySelected.length == 0) {

        let ids = luckyStudents.map((s) => {
            return s.id;
        });

        if (p313.length == ids.length) {
            luckyStudents = [];
            ids = [];
        }

        // let ids = [9, 3, 2, 7];
        // let ids = luckyStudents.map(s => s.id);
        //luckyStudents.map(s=>s.id);   // massivdeki elementlerin id-lerinden ibaret yeni massiv qaytarir


        let freeStudents = p313.filter(function (student) {

            let position = ids.indexOf(student.id);

            return position == -1;

        });

        let randomIndex = getRndInteger(0, freeStudents.length - 1);
        let selectedStudent = freeStudents[randomIndex];


        let luckyStudent = {
            id: selectedStudent.id,
            date: getToday()
        };

        luckyStudents.push(luckyStudent);

        let bulk = JSON.stringify(luckyStudents); //cast as string
        // console.log(luckyStudent);
        // console.log(bulk);
        sessionStorage.setItem('luckyStudents', bulk);
        // console.log(selectedStudent.name,luckyStudent);
    }

    luckyStudents = JSON.parse(sessionStorage.getItem('luckyStudents'));

    console.log(luckyStudents);
}

onLoad();

