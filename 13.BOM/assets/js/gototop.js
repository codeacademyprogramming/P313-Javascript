window.addEventListener('scroll', function (e) {
    let btn = document.querySelector('.go-top');
    // let diff = window.scrollY;
    let diff = e.srcElement.defaultView.scrollY;
    console.log(diff);
    if (diff > 50) {
        btn.classList.add('show');
    }
    else {
        btn.classList.remove('show');
    }

    // console.log(e);
});