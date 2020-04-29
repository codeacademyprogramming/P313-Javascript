function topla(a, b, tamamlandi) {
    let c = a + b;

    console.log('cem>> ' + c);
    //  console.log('toplama icra olundu');


    if (typeof tamamlandi == 'function')
        tamamlandi();

}


setTimeout(() => {
    let a = 2;
    let b = 4;

    //callback
    //topla(a, b, executeComplated);


    //callback
    // topla(a, b, function(){//anonymous function
    //     alert('Operation complated!');
    // });

    //callback
    topla(a, b, () => {//arrow function
        alert('Operation complated!');
    });

}, 2000);
// showinfo();

function showinfo() {
    console.log('toplama bitdi');
}

function executeComplated() {
    console.log('******** THE END ******');
}





//String
//Number
//boolean

//function

