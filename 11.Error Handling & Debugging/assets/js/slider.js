
function divide(a, b) {
    // if (b == 0)
    //     return;

    if (b == 0)
        throw '0-a bolmek olmaz';


    let c = a / b
    console.log(c);
}

function myClick() {
    
    try {

        divide(4, 0);

    } catch (error) {
        console.log(error);

        let errEl = document.createElement('div');
        errEl.innerHTML = error;


        document.body.appendChild(errEl);
    }
}


try {

    let now = Date();
    document.querySelector('#currentDate').innerHTML = now;

    console.log('end of try');

} catch (e) {
    console.log(e);
    console.log('end of catch');
}
finally {
    console.log('end of finally');
}

// let now = Date();
// document.querySelector('#currentDate11111').innerHTML = now;


let slider1 = document.querySelector('#slider1');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

prev.addEventListener('click', function (e) {
    let activeSlide = document.querySelector('#slider1 .slide.active');

    // if (activeSlide == null)
    //     return;

    let nextSlide = activeSlide.previousElementSibling;

    if (nextSlide == null) {
        let slideCount = document.querySelectorAll('#slider1 .slide').length;
        nextSlide = slider1.children[slideCount];
    }

    topla(3, 4)

    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');


});

next.addEventListener('click', function (e) {
    let activeSlide = document.querySelector('#slider1 .slide.active');

    if (activeSlide == null)
        return;

    let nextSlide = activeSlide.nextElementSibling;

    if (nextSlide.classList.contains('slide') == false)
        nextSlide = slider1.children[0];
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');

});

function topla(a, b) {

    a = a * a - b;

    return a + b;
}


// setInterval(() => {
//     next.click();
// }, 2000);




