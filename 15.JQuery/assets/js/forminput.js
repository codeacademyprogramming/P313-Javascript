$(document).ready(function () {


    $('#btnSend').click(function (e) {
        e.preventDefault();

        let personName = $('#name').val();
        let personSurname = $('[name="surname"]').val();
        let personAge = $('#age').val();
        let personBithDay = $('#birthOfDate').val();
        let personGenderId = $('#gender').val();
        let personAgree = $('#agree').is(':checked');


        console.log(personName, personSurname,
            personAge, personBithDay,
            personGenderId,
            personAgree);
        // console.log('Ok!');
    });






    $('#btnChange').click(function () {

        // $('#display').text('Salam')
        // $('#display').text('<b>Salam</b>');
        //$('#display').html('<b>Salam</b>');


        let metn = $('#display').text();
        // let metn = $('#display').html();


        $('#name').val('Anar');
        
        // alert(metn);
    });
});