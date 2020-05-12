let btn = document.querySelector('#btn');
const list = document.querySelector('#list');


btn.onclick = function () {
    let date = Date();

    let li = document.createElement('li');

    li.innerHTML = date;

    list.appendChild(li);

    // console.log();
};
