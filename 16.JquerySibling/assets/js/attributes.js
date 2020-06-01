$(document).ready(function () {


    $('#addAttr').click(function (e) {
        e.preventDefault();


        $('#elements').attr('pid', 20);


    });


    $('#removeAttr').click(function (e) {
        e.preventDefault();


        $('#elements').removeAttr('pid');
        // $('#elements').attr('class', 'my-list');duzgun deyil override olunur onceki


    });


    $('#changeAttr').click(function (e) {
        e.preventDefault();


        $('#elements').attr('pid', 30);
        // $('#elements').attr('class', 'demo'); duzgun deyil override olunur onceki


    });


    $('#btnAddClass').click(function () {

        $('#elements').addClass('beautify')
            .addClass('show')
            .attr('pid', 222);
    });


    $('#btnRemoveClass').click(function () {

        $('#elements').removeClass('beautify');
    });

    $('#btnReverseBeauty').click(function () {

        $('#elements').toggleClass('beautify');

    });



});