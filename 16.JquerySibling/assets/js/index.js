$(document).ready(function () {


    $('#prevBtn').click(function (e) {

        // console.log('Evvelki');


        let activeElement = $('#elements > li.active');

        // console.log(activeElement);

        let prevElement = $(activeElement).prev('li');
        // console.log(prevElement);

        // let prevText = $(prevElement).text();
        // console.log(prevText);

        // if (prevElement.length == 0) {
        //     let allChild = $(activeElement).siblings('li');
        //     // console.log(allChild);
        //     // return;
        //     prevElement = $('#elements > li')[allChild.length];
        // }

        if (prevElement.length == 0) {
            prevElement = $('#elements > li:last-of-type');//last-child olmaz
        }

        // console.log(prevElement);

        $(activeElement).removeClass('active');

        $(prevElement).addClass('active');


    });



    $('#nextBtn').click(function (e) {

        // console.log('Sonraki');

        let activeElement = $('#elements > li.active');

        // let nextElement = $(activeElement).next();
        let nextElement = $(activeElement).next('li');

        // let nextText = $(nextElement).text();

        // console.log(nextText);
        // console.log(nextText);

        if (nextElement.length == 0) {
            nextElement = $('#elements > li')[0];
        }

        $(activeElement).removeClass('active');

        $(nextElement).addClass('active');

    });



});