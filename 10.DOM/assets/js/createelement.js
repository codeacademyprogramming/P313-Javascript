const list = document.querySelector('#monitor');

let newLi = document.createElement('li');

newLi.innerHTML = '<b>Js</b>';

list.appendChild(newLi);


let navLi = createNavLi('Demo', true);
list.appendChild(navLi);

function createNavLi(text, isActive) {
    let newLi = document.createElement('li');
    newLi.classList.add('nav-item');
    newLi.innerHTML = text;

    if (isActive == true) {
        newLi.classList.add('active');
    }

    return newLi;
}



for (let i2 = 0; i2 < 5; i2++) {

    let tr = document.createElement('tr');

    for (let index = 0; index < 3; index++) {
        let td1 = document.createElement('td');

        td1.innerHTML = `${i2}.${index}`;
        tr.appendChild(td1);

    }

    let myTBody = document.querySelector('#myTBody');
    myTBody.appendChild(tr);


}
