let action = document.querySelector('#action');

// action.onclick = play();//invoke function
// action.onclick = play;//referance function
// action.onclick = nextSound;//referance function
// let x = action.cloneNode(true);

document.body.appendChild(action.cloneNode(true));


action.addEventListener('click', nextSound);
action.addEventListener('click',play);


action.removeEventListener('click',nextSound);


//e: Event Arguments
function play(e) {

    // let el = document.querySelector('#action');

    // console.log(e);
    // if()
    // {

    // }

    // let el = e;
    // let el = this;
    // console.log(el);
    console.log('playing with click');
    return -999;
}

function nextSound() {
    console.log('playing next sound with double click');
}


let demoBtn = document.querySelector('.demo');


demoBtn.addEventListener('click', function (e) {
    // let el = this;
    // console.log(el);
    console.log(e.target);
    // console.log(e.target);
});