let box = document.querySelector('.box-hovered');

// box.addEventListener('mouseover',function(args){

// console.log(args);
//     box.style.backgroundColor='orange';
// });



// box.addEventListener('mouseover', (args) => {

//     if (args.screenX <= 100) {
//         box.style.backgroundColor = 'orange';
//     }
//     else
//         box.style.backgroundColor = 'pink';
//     console.log(args);

// }

// );

box.addEventListener('mouseover', showInfo);


//e: EventArgs
function showInfo(e) {
    console.log(`x:${e.screenX},y:${e.screenY}`);
}


// box.addEventListener('mousemove', (args) => {

//     console.log(args);
//     box.style.backgroundColor = 'orange';
// }

// );


box.addEventListener('mouseout', function (args) {
    // console.log(args);
    box.style.backgroundColor = 'teal';
});



let myCheck = document.querySelector('#myCheckBox');

myCheck.addEventListener('change', function (e) {
    console.log(myCheck.checked);
});


let allCheckbox = document.querySelectorAll('.chck-group');

allCheckbox.forEach(function (element) {
    element.addEventListener('change', yoxla);
});

function yoxla(e) {
    console.log(e.currentTarget.checked)
    // console.log(myCheck.checked);
}


let myText = document.querySelector('#myText');

myText.addEventListener('change', function (e) {
    let el = e.currentTarget;
    console.log('deyer deyishdi' + el.value);
});


let mySelect = document.querySelector('#mySelect');

mySelect.addEventListener('change', function (e) {
    let el = e.currentTarget;
    let elActual = e.current;

    console.log(el, `deyer deyishdi: ${el.value}`);
});


function getMax(reqemler) {
    console.log(reqemler);
}

let arr = new Array(1, 2, 3);
getMax(arr)


getMax(1, 2, 3);

let colors = document.querySelector('#colors');

colors.addEventListener('change', changeColor);

//window.location.href='https://google.com'
function changeColor(e) {
    let color = e.currentTarget.value;

    document.body.style.backgroundColor = color;
}
