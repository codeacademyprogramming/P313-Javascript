//test
//exec
//ayi
//
let word = 'zalit';

let pattern = /^.a.i.$/g;

let success = pattern.test(word);
if (success == true) {
    console.log(`${word}  şablona uyğundur`);
}
else {
    console.log(`${word}  şablona uyğun deyil`);
}


let month = document.querySelector('#month');


month.addEventListener('keydown', function (e) {
    let el = e.currentTarget;

    if (!(e.which == 8 || e.which == 46)) {

        let value = el.value;

        let pattern = /^\d{2}$/;
        if (pattern.test(value)) {
            el.value += '/';
        }
    }

});

month.addEventListener('paste', function (e) {
    // console.log('pasted');

    let el = e.currentTarget;

    // let value = el.value;
    // console.log(e.clipboardData);

    let pattern = /^(\d{2})(\d{2})/g;

    navigator.clipboard.readText()
        .then(text => {
            // console.log('Pasted content: ', text);

            let result = pattern.exec(text);

            console.log(result);
            if (result) {
                let part1 = result[1];
                let part2 = result[2];
                el.value = `${part1}/${part2}`;
            }
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
})


function toJson(formData) {
    
    var object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    return json;
}

