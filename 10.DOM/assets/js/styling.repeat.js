let links = document.querySelectorAll('.social-link');
// links.style.textDecoration='none';
console.log(links);

links.forEach(function(el,index){
    el.style.textDecoration='none';

    // el.textContent=`Social Link <u>${index}</u>`;
    el.innerHTML=`Social Link <u>${index}</u>`;
});


let rza = document.querySelector('#rza');

// rza.style.color  ='#cdcdcd';
// rza.style.color  ='rgb(255,255,255)';
// rza.style.className  ='btn';
rza.className  ='btn';
rza.style.textDecoration='underline';


// let googleLink = document.querySelector('#goToGoogle');
// let googleLink = document.querySelector('[href="#1"]');




// googleLink.href='#2';

// let male={
//     id:1,
//     name:'male'
// };

// let female={
//     id:2,
//     name:'female'
// };

// let p = {
//     name:'Filankes',
//     surname:'Filankesov',
//     gender: male//'Male'
// };

// console.log(p);