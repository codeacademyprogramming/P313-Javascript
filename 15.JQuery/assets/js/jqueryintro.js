let jsEls = document.querySelectorAll('.demo');
let jqueryEls = $('.demo');



console.log(jsEls);
console.log(jqueryEls);



// let btnTest = document.querySelector('#btnTest');

// btnTest.addEventListener('click',function(e){

//     console.log('Duymeni sixdiniz!');

// });



// $('#btnTest').on('click',function (e) {

//     console.log('Duymeni sixdiniz!');

// });


// $('#btnTest').click(function(e){

//     console.log('Duymeni sixdiniz!');

// });


//--------------------------------

// let demoEls = document.querySelectorAll('.demo');//

// // demoEls.addEventListener('click',function(){
// //     alert('Duymeni sixdiniz!');
// // });


// demoEls.forEach(function (el) {
//     el.addEventListener('click', function () {
//         alert('Duymeni sixdiniz!');
//     });
// });

///all

// $('.demo').click(function (e) {
//     alert('Duymeni sixdiniz!');
// });



$('.demo').on('click', function (e) {
    alert('Duymeni sixdiniz!');
});
