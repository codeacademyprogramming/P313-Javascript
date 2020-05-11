// let rza = document.getElementById('rza');

// console.log(rza);

// let arzu = document.getElementById('arzu');

// console.log(arzu);

// let cavansirler=document.getElementsByClassName('cavanshir');

// console.log(cavansirler[1]);

// let resul = document.getElementsByName('resul');

// console.log(resul[0]);

// let valideynler = document.getElementsByTagName('p');

// console.log(valideynler);

// let kamil = document.querySelector('[name="resul"] > #kamil');

// console.log(kamil);


let cavansirlerV2 = document.querySelector('#arzu > .cavanshir');

console.log(cavansirlerV2);
console.log('------------------------------------------------------');
// let cavansirlerV3 = document.querySelectorAll('#arzu > .cavanshir');
let cavansirlerV3 = document.querySelectorAll('.cavanshir');

// console.log(cavansirlerV3);

for(let index = 0 ; index<=cavansirlerV3.length;index++)
{
    const c = cavansirlerV3[index];
    console.log(c);
}


