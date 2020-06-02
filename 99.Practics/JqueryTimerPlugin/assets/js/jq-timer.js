// (function ($) {

//     $.fn.greenify = function () {
//         this.css("color", "green");
//         return this;
//     };

// }(jQuery));

let myValue = null;

// let len = myValue?.length;

// let len = (myValue ?? '').length;

// if (myValue == null) {
//     myvalue = '';
// }

// let len = myValue.length;

// if (myValue != null) {
//     len = myValue.length;
// }
// // else {
// //     len = 0;
// // }

// console.log(myValue, '<==>', len);


function isValid(val) {

    if (val == null)
        return false;

    if (isNaN(val))
        return false;

    return true;
}

function format(val) {

    // if (!isNaN(val))
    //     val = parseInt(val);

    if (val < 10)
        return `0${parseInt(val)}`;

    return val;
}



////////single selection
// (function ($) {


//     $.fn.timer = function () {
//         let that = this;

//         console.log(that);

//         $(that).addClass('timer');
//         // console.log(that);
//         // console.warn('bizim plugin calishdi');
//         for (let index = 0; index < 5; index++) {
//             $(that).append($('<li/>'));
//         }

//         let childs = $(that).children();

//         let hourEl = childs[0];
//         let minuteEl = childs[2];
//         let secondEl = childs[4];

//         let time = $(that).attr('data-time');

//         if (time == undefined) {
//             time = '00:00:00';
//         }

//         console.log(time);
//         let timeParts = time.split(':');

//         let hours = timeParts[0];
//         let minutes = timeParts[1];
//         let seconds = timeParts[2];

//         if (!isValid(hours) || !isValid(minutes) || !isValid(seconds)) {
//             return that;
//         }

//         $(that).addClass('running');

//         $(hourEl).text(format(hours));
//         $(minuteEl).text(format(minutes));
//         $(secondEl).text(format(seconds));

//         $(that).find('li:nth-of-type(even)').text(':');


//         let pid = setInterval(() => {

//             if (seconds > 0) {
//                 seconds--;
//             }
//             else if (minutes > 0) {
//                 seconds = 59;
//                 minutes--;
//             }
//             else if (hours > 0) {
//                 minutes = 59;
//                 seconds = 59;
//                 hours--;
//             }
//             else {
//                 // sound.play();
//                 $(that).removeClass('running');
//                 clearInterval(pid);
//             }

//             $(hourEl).text(format(hours));
//             $(minuteEl).text(format(minutes));
//             $(secondEl).text(format(seconds));

//         }, 1000);



//         $(that).attr('pid', pid);


//         return that;
//     }




// }(jQuery));



//multiply selection
(function ($) {


    $.fn.timer = function (options) {

        let that = this; //massiv

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            class: ["timer"],
            autostart: false
        }, options);

        if (settings.class.includes('timer') == false) {
            settings.class.push('timer');
        }


        $.each(that, function (indexInArray, perTimer) {


            // console.log(valueOfElement);

            $(perTimer).addClass(settings.class.join(' ')).html('');
            // console.log(that);
            // console.warn('bizim plugin calishdi');
            for (let index = 0; index < 5; index++) {
                $(perTimer).append($('<li/>'));
            }

            let childs = $(perTimer).children();

            let hourEl = childs[0];
            let minuteEl = childs[2];
            let secondEl = childs[4];

            let time = $(perTimer).attr('data-time') || '00:00:00'; //set default

            // if (time == undefined) {
            //     time = '00:00:00';
            // }

            // console.log(time);
            let timeParts = time.split(':');

            let hours = timeParts[0];
            let minutes = timeParts[1];
            let seconds = timeParts[2];

            if (!isValid(hours) || !isValid(minutes) || !isValid(seconds)) {
                return;
            }



            $(hourEl).text(format(hours));
            $(minuteEl).text(format(minutes));
            $(secondEl).text(format(seconds));

            $(perTimer).find('li:nth-of-type(even)').text(':');


            if (settings.autostart == true) {
                $(perTimer).addClass('running');
                let pid = setInterval(() => {

                    if (seconds > 0) {
                        seconds--;
                    }
                    else if (minutes > 0) {
                        seconds = 59;
                        minutes--;
                    }
                    else if (hours > 0) {
                        minutes = 59;
                        seconds = 59;
                        hours--;
                    }
                    else {
                        // sound.play();
                        $(that).removeClass('running');
                        clearInterval(pid);
                    }

                    $(hourEl).text(format(hours));
                    $(minuteEl).text(format(minutes));
                    $(secondEl).text(format(seconds));


                    $(perTimer).attr('data-time', `${format(hours)}:${format(minutes)}:${format(seconds)}`);

                }, 1000);



                $(perTimer).attr('pid', pid);
            }


            $(perTimer).unbind().click(function () {


                console.log($(this).hasClass('running'));

                if ($(this).hasClass('running')) {
                    let pid = $(this).attr('pid');

                    $(this).removeClass('running');
                    clearInterval(pid);
                }
                else {

                    $(perTimer).timer({
                        autostart: true
                    });

                }
            });


        });




        return that;
    }




}(jQuery));