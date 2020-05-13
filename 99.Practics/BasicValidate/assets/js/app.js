window.addEventListener('load', endFinishing);

function endFinishing() {
    let input = document.querySelector('#validatedNumber');
    input.addEventListener('keyup', validate);
}

// let arr = [1, 2, 3];
// arr.forEach((e) => {
//     console.log(e);
// });

// function print(e, t, z) {
//     console.log(e, t, z);;
// }


function validate(e) {
    let input = e.target;
    //  let input = document.querySelector('#validatedNumber');
    let info = document.querySelector('#info');

    // console.log(e.target);
    let val = input.value;
    let divGroup = input.parentElement;
    // console.log();

    let state = isNaN(val);/*
    true verirse demeli number deyil
    false verse demeli numberdir
    */

    if (state == true) {
        info.textContent = 'Eded deyil';
        // input.style.borderColor = 'red';
        divGroup.classList.add('has-error');
        divGroup.classList.remove('has-success');
    }
    else {
        info.textContent = '';
        // input.style.borderColor = 'green';
        divGroup.classList.remove('has-error');
        divGroup.classList.add('has-success');
    }
}