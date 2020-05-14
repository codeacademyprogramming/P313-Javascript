let all = document.querySelectorAll('[type=checkbox]');

all.forEach(function (checkbox) {
    checkbox.onchange = function () {

        let all = document.querySelectorAll('[type=checkbox]');
        let checked = document.querySelectorAll('[type=checkbox]:checked');

        // console.log('All Count: '+all.length);
        // console.log('Checked Count: '+checked.length);

        let percent = checked.length * 100 / all.length;

        console.log(`${percent}%`);

        let progress = document.querySelector('.progress');

        progress.style.width = `${percent}%`;
        progress.innerHTML = `${percent}%`;

        if (progress == 0) {
            progress.innerHTML = '';
        }
    };

});


let data = [
    {
        name: 'checkNo-1',
        amount: 50,
        date: '2020.01.05 10:00:00'
    },
    {
        name: 'checkNo-2',
        amount: 15,
        date: '2020.01.05 11:00:00'
    },
    {
        name: 'checkNo-3',
        amount: 15,
        date: '2020.01.06 11:00:00'
    }
];

let filterDate = '07012020';

let filtered0105 = data.filter(function (value) {

    let dateBulk = value.date;

    let currentDate = new Date(dateBulk);

    let il = currentDate.getFullYear();
    let ay = currentDate.getMonth() + 1;
    let gun = currentDate.getDate();

    if (filterDate == `${complate(gun)}${complate(ay)}${il}`) {
        // console.log(`Uygundur: ${currentDate}`);
        return true;
    }

    // console.log(`Axtarilan Tarix: ${filterDate}`);
    // console.log(`Melumat Tarixi: ${currentDate}`);
    // console.log(`Mumkun tarix: ${complate(gun)}${complate(ay)}${il}`);

    return false;
});

console.log(filtered0105);


function complate(a) {
    if (a < 10) {
        return `0${a}`;
    }



    return a;
}






