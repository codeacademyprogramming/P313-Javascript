function toObject(valueArray) {

    /*
    {
        name:'surname',
        value:'A-eff'
    }
    {
        name:'age',
        value:'19'
    }
    */
    let obj = {};
    // obj.name='Kamran';
    // obj.surname='aeff';
    // obj.age=20;

    for (const item of valueArray) {
        // console.log(item);
        obj[item.name] = item.value;
    }

    return obj;
}

$(document).ready(function () {

    $('#myBlank').submit(function (e) {
        e.preventDefault();

        // let data = new FormData(e.currentTarget);

        // console.log(data.get('name'));
        // console.log(data.get('surname'));
        // console.log(data.get('age'));
        // console.log(data.get('agree'));


        console.log($(this));
        let data = $(this).serializeArray();

        console.log(data);

        let o = toObject(data);

        console.log(o);

    });

});