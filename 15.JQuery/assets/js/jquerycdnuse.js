// window.addEventListener('load',function(){

//     console.log('sehife yuklendi!');
// });



$(document).ready(function () {

    // console.log('sehife yuklendi!');


    $('#btnTest').click(function (e) {
        e.preventDefault();

        // console.log(e.currentTarget);


        // let el = $(e.currentTarget);
        // console.log(el);

        // $(e.currentTarget).css('background-color', 'red');
        $(e.currentTarget).css({
            'background-color': 'red',
            'color': '#ffffff',
            'border': 'none'

        });

        // e.currentTarget.style.backgroundColor='';
        // e.currentTarget.style.color='';


    });


    $('#btnHide').click(function (e) {

        // $('.demo').css({
        //     'display':'none'
        // });

        // $('.demo').hide();
        $('.demo').fadeOut(3000);

    });

    $('#btnShow').click(function (e) {

        // $('.demo').css({
        //     'display':'none'
        // });

        // $('.demo').show();

        $('.demo').fadeIn(3000);

    });

    //--------------------------------


    $('#btn1').click(function (e) {
        e.preventDefault();

        $('#li1').remove();
    });



    // $('#btn2').click(function (e) {
    //     e.preventDefault();

    //     // $('#li2').remove();

    //     let el = $('#li2').clone(true);

    //     $('#destination').append(el);
    // });


    $('#appendFruit').click(function (e) {
        e.preventDefault();


        // let li = $('<li class="demo">Demo</li>');

        // $(li).addClass('active');

        // let options = {
        //     class: 'demo1',
        //     html: 'p313',
        //     state: 'on'
        // };

        let li = $('<li/>',
        {
            class: 'demo1',
            html: 'p313',
            state: 'on'
        });

        $('#destination').append(li);



    //   $(selector).find(selector2);

    // e.target.value = 
    // e.target.value.replace(/[^\dA-Z]/g, '')
    // .replace(/(.{4})/g, '$1 ').trim();




    });




    let metn = 'Bugun Jquery Dersimiz var';

    const pattern = /(.+)\s(.+)\s(.+)\s(.+)/g;

    console.log(metn);

    let replaced = metn.replace(pattern,'$4-$2-$1-$3');
    console.log(replaced);


    /*
    055-444-12-34
    0554441231
    0554441232
    0554441236
    0554441235
    */

});




