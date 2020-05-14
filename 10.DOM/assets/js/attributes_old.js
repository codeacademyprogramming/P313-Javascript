let google = document.querySelector('#google');

// google.href='#3';

google.setAttribute('href', 'https://google.com');
google.setAttribute('target', '_blank');


//-------------------------------------------------

let fb = document.querySelector('#fb');

let fbHref = fb.getAttribute('href');

// console.log(fbHref);
// let a= 3;
if (fbHref == null) {
    fb.setAttribute('href', 'https://facebook.com');
    fb.setAttribute('target', '_blank');
}


// fb.className='nav-link';

//  fb.setAttribute('class','active');

//fb.classList.add('active');

fb.classList.remove(`active`,'nav-link');


