$(document).ready(function () {



    $('#product').submit(function (e) {
        e.preventDefault();


        let data = $(e.target).serializeArray();

        console.log(data);

        let obj = {};

        for (const input of data) {
            // console.log(`${input.name}   ----   ${input.value}`);

            let valInt;

            if (/^\d+$/g.test(input.value))
                valInt = parseInt(input.value);
            else
                valInt = input.value;


            obj[input.name] = valInt;
        }

        console.log(obj);

        $.ajax({
            type: "POST",
            url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Products",
            data: JSON.stringify(obj),
            // dataType: "dataType",
            contentType: 'application/json',
            success: function (response) {
                alert('Mehsul yaradildi!');
                window.location.href = "index.html";
            },
            error: function (response) {
                console.log('ERROR', response);

            }
        });




    });



});