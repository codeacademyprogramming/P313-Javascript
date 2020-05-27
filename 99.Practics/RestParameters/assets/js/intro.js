// function showInfo()
// {
//     alert('Salam Javascript');
// }

// function showInfo(lang)
// {
//     alert(`Salam ${lang}`);
// }

// function topla(a, b, c, d, e) {
//     let z;

//     z = a + b + c;

//     console.log(`${a}+${b}+${c}=${z}`);
// }

// // topla(2, 4);
// topla(2, 5, 17, 18, 1);

//normal array parameter
// function toplaArr(massiv) {
//     let z = 0;

//     massiv.forEach(reqem => {
//         z = z + reqem;
//     });

//     console.log(`Umumi cem=${z}`);
// }


//rest parameter
function toplaArr(...massiv) {
    let z = 0;

    massiv.forEach((reqem,index) => {
        z = z + reqem;
    });

    console.log(`Umumi cem=${z}`);
}

// let a = [2, 4];

//  toplaArr(a);

//  a = [2, 5, 17, 18, 1];
//  toplaArr(a);

toplaArr(1,2);
toplaArr(1,2,3);
toplaArr(1,2,3,4,5,6);



