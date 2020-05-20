
window.addEventListener('load', finishedPageLoad);


function finishedPageLoad() {
    let myInput = document.querySelector('#number');

    myInput.addEventListener('keydown', function (e) {

        if (e.shiftKey == true && e.which == 78) {
            alert('Shexsiyyet vesiqenizin nomresini daxil edin');
        }

        console.log(e);
        console.log(e.which);

        // [48-57]
        // if()
        // if (e.keyCode >= 48 && e.keyCode <= 57) {
        //     console.log('reqem yazildi');
        //     // console.log('reqem yazildi');
        // }
        // else {
        //     e.preventDefault()
        //     console.log('q-reqem yazildi');
        // }

        let allowed = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57 //digits
            , 8 // backspace
            , 46 //delete
            , 37 // left arrow
            , 39 // right arrow
            , 13 // enter
        ];

        //  index tapiriq,eger -1dirse demeli massivde yoxdur
        let indexPos = allowed.indexOf(e.keyCode);

        //
        if (indexPos == -1) {
            e.preventDefault();
        }

    });


    let series = document.querySelector('#series');

    // series.addEventListener('keydown', function (e) {

    //     let el = e.currentTarget;


    //     if(!(e.which == 13 || e.which == 8))
    //     {
    //         if (el.value == 'aze' || el.value == 'aa') {
    //             let myInput = document.querySelector('#number');
    //             // el.blur();
    //             myInput.focus();
    //             console.log('okey');
    //             // e.preventDefault();
    //         }
    //     }
        
        

    //     console.log(el.value);

    // });

    series.addEventListener('keyup', function (e) {

        let el = e.currentTarget;

        (e.which == 46 || e.which == 8)

        if(!(e.which == 46 || e.which == 8))
        {
            if (el.value == 'aze' || el.value == 'aa') {
                let myInput = document.querySelector('#number');
                // el.blur();
                myInput.focus();
                console.log('okey');
                // e.preventDefault();
            }
        }
        
        

        console.log(el.value);

    });


    console.log('called: finishedPageLoad');
}