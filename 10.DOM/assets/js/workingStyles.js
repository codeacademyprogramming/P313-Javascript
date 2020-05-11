let lazim = document.querySelector('#lazim');

console.log(lazim);

lazim.style.color='red';
lazim.style.fontWeight='bold';
lazim.style.fontSize= '5rem'; //


// lazim.className="mt-3";

lazim.classList.add('mt-3');

lazim.classList.remove('mx-3');

lazim.classList.add('px-2','text-danger');


let btnDemo = document.querySelector('#btnDemo');

btnDemo.textContent='Click';


let goToGoogle = document.querySelector('#goToGoogle');
// goToGoogle.textContent='Go to Facebook';
// goToGoogle.textContent='<i class="fas fa-pen"></i> Go to Facebook';
// goToGoogle.textContent='<b>Go to Facebook</b>';
goToGoogle.innerHTML='<b>Go to Facebook</b>';
