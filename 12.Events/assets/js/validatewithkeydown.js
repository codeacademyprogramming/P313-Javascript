window.addEventListener('load', myFunction);

function myFunction() {

    let no = document.querySelector('#number');

    // no.addEventListener('keydown', function (e) {

    //     let el = e.currentTarget;

    //     console.log(el.value);

    //     if (/^\d+$/g.test(el.value)) {
    //         console.log('ugurludur');
    //     }
    //     else {
    //         console.log('ugursuzdur');
    //     }

    // });

    // no.addEventListener('keyup', function (e) {

    //     let el = e.currentTarget;

    //     console.log(el.value);

    //     if (/^\d+$/g.test(el.value)) {
    //         console.log('ugurludur');
    //     }
    //     else {
    //         e.preventDefault();
    //         console.log('ugursuzdur');
    //     }

    // });

    no.addEventListener('keyup', function (e) {
        console.log('keyup ishledi', e.currentTarget.value);
        //3cu bu icra olunur
    });

    no.addEventListener('keydown', function (e) {
        console.log('keydown ishledi', e.currentTarget.value);
        //1.ci bu icra olunur

        // eger problem varsa  e.preventDefault(); cagirilir
    });

    no.addEventListener('keypress', function (e) {
        //2ci bu icra olunur eger keydown-da prevent olunmayibsa
        console.log('keypress ishledi', e.currentTarget.value);
        e.preventDefault();
    });

}