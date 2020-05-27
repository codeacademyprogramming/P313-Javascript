window.addEventListener('load', function () {


    let envelope = document.querySelector('#envelope');



    envelope.addEventListener('submit', function (e) {

        // let ageEl = document.querySelector('#age');

        // if(isNaN(ageEl.value)==true)
        // {
        //     e.preventDefault();

        //     alert('reqem daxil edilmeyib');
        //     ageEl.focus();
        //     return;
        // }



        // let min = parseInt(ageEl.getAttribute('min'));
        // let max = parseInt(ageEl.getAttribute('max'));

        // let age = parseInt(ageEl.value);

        // // console.log(age + 1)

        // if (age >= min && age <= max) {

        // }
        // else {
        //     console.log(`yash intervali ${min}-den >= ${max}-den <= olmalidir`);
        //     e.preventDefault();
        // }
        // //----------------------------------------------------------------

        // let percentEl = document.querySelector('#percent');

        // min = parseInt(percentEl.getAttribute('min'));
        // max = parseInt(percentEl.getAttribute('max'));

        // let percent = parseInt(percentEl.value);

        // console.log(percent)

        // if (percent >= min && percent <= max) {

        // }
        // else {
        //     console.log(`Faiz derecesi intervali ${min}-den >= ${max}-den <= olmalidir`);
        //     e.preventDefault();
        // }



        //select validate
        // let children = document.querySelector('#children');


        // console.log(children.value);


        // children.classList.remove('error');

        // if(isNaN(children.value)==true || children.value.length<1)
        // {
        //     children.classList.add('error');
        //     console.log(``);
        //     e.preventDefault();
        //     return;
        // }


        let stateEl = document.querySelector('#i_agree');

        let state = stateEl.checked;

        if (state == true) {

        }
        else {
            stateEl.classList.add('error');
            e.preventDefault();
            return;
        }



        let vals = document.querySelectorAll('#vals input[type="checkbox"]');


        let selecteds = [...vals].filter(function (el) {
            return el.checked == true;
        });

        console.log(selecteds);

        if (selecteds.length == 0) {
            vals[0].parentElement.parentElement.classList.add('error');
            e.preventDefault();
            return;
        }




        console.log('End Of Block');


        // e.preventDefault();

    });


});





// function validate(options) {

// }

// let v1 = [
//     {
//         id: 'age',
//         required: true,
//     },
//     {
//         id: 'perceent',
//         min: 3,
//         max: 5
//     }
// ];

// validate(v1);