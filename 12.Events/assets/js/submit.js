window.addEventListener('load', function () {



    let myForm = document.querySelector('#myForm');



    myForm.addEventListener('submit', function (e) {

        // let firstName=document.querySelector('[name="FirstName"]');
        // let lastName=document.querySelector('[name="LastName"]');

        // console.log(firstName.value);
        // console.log(lastName.value);

        let data = new FormData(e.currentTarget);

        console.log(data.get('title'));
        console.log(data.get('description'));
        console.log(data.get('FatherName'));
        console.log(e);


        e.preventDefault();



    });







});