let slider1 = document.querySelector('#slider1');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');


prev.addEventListener('click', function (e) {
    let activeSlide = document.querySelector('#slider1 .slide.active');

    if (activeSlide == null)
        return;

    let nextSlide = activeSlide.previousElementSibling;

    if (nextSlide == null) {
        let slideCount = document.querySelectorAll('#slider1 .slide').length;
        nextSlide = slider1.children[slideCount - 1];
    }
    
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


setInterval(() => {
    next.click();
}, 2000);

