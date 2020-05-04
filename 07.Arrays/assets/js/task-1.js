let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let selected = nums.filter(function (value, index, arr) {
    // let rsult = false;
    // if (value % 2 == 0 && value > 5)
    //     result = true;

    return value % 2 == 0 && value > 5;
});

console.log(selected);





// let search = 'problem'; //boyuk kicik herf filan nezere alinmasin
// // >> test

// // Test
// // TEST
// // test


// //Regex
// //toLowerCase()
// //toUpperCase();

// let sentences = 'Proqramçı probleminin fərqində olmayan birinin problemini problem sahibinin bilmədiyi üsullarla həll edən biridir.';

// let words = sentences.split(' ');


// words.forEach((word) => {

//     let count = 0;

//     if (word == search) {
//         console.log(word);
//     }
// });

