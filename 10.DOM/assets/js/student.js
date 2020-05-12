const btnStudent = document.querySelector('#btnStudent');
const list = document.querySelector('#list');
const studentName = document.querySelector('#studentName');
const studentSurName = document.querySelector('#studentSurName');

btnStudent.onclick = addStudent; //assign function

function addStudent() {
    let stuName = studentName.value;
    let stuSurname = studentSurName.value;

    if (stuName == '' || stuSurname == '')// if (stuName.length < 1)
        return;//ashagidaki kodlar ishlemesin

    // if (stuSurname == '')// if (stuName.length < 1)
    //     return;//ashagidaki kodlar ishlemesin

    let li = document.createElement('li');
    // li.textContent = `${stuName} ${stuSurname}`;
    let spanName = document.createElement('span');
    spanName.textContent = stuName;
    li.appendChild(spanName);

    let spanSurname = document.createElement('span');
    spanSurname.innerHTML = `<br>${stuSurname}`;
    li.appendChild(spanSurname);

    list.appendChild(li);

    studentName.value = '';
}

// addStudent();//invoke function