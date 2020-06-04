$(document).ready(function () {


    $('#cd-menu-trigger').click(function (e) {
        e.preventDefault();

        e.stopPropagation();

        //lateral-menu-is-open
        console.log('kliklendi');

        $('#cd-lateral-nav').addClass('lateral-menu-is-open');
        $('.cd-main-content').addClass('lateral-menu-is-open');
    });


    $('.cd-main-content').click(function () {
        console.log('cd-main-content=>> kliklendi');
        $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
        $('.cd-main-content').removeClass('lateral-menu-is-open');
    });

});