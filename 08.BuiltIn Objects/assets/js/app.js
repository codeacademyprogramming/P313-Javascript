//Extension methods
Number.prototype.toString2 = function (requiredLength) {
    let value = this;
    let valueLength = String(value).length;

    let repeatCount = requiredLength - valueLength;

    let out = `${'0'.repeat(repeatCount)}${value}`

    return out;
}

// //primitive types
// let number = 1;
// let word = 'soz';
// let state = true;

// //complex types
// //Date
// //Array
// //Object


// //04.05.2020 20:00:30

// //let indikiTarix = Date(); //indiki vaxti verir
// // console.log(indikiTarix);

// //unixtimestamp
// // let selectedTs = Date.parse('2020.05.22 20:15:04');//qeyd olunmush tarixi date formatina cevirir
// //Date.now()//indiki unixtime

// //new Date() // indiki tarixi
// let selectedDate = new Date('2020.05.22 20:15:04');

// console.log(selectedDate);

// /*
// Date
// new Date()
// */



// let monthNames = ['','','','','May',''];

// let now = new Date();
// //4.5.2020 22:33:44
// let days = now.getDate();
// let months = now.getMonth() + 1;
// let years = now.getFullYear();

// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// let out = `${(days).toString2(2)}.${(months).toString2(2)}.${years} ${hours}:${minutes}:${(seconds).toString2(3)}`;

// console.log(out);

function getDate() {
    let now = new Date();
    //4.5.2020 22:33:44
    let days = now.getDate();
    let months = now.getMonth() + 1;
    let years = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let out = `${(days).toString2(2)}.${(months).toString2(2)}.${years} ${hours}:${minutes}:${(seconds).toString2(3)}`;

    return out;
}


//2 ,5==> 00002
//22, 3=> 022

// function toString2(value, requiredLength) {
//     let valueLength = String(value).length;

//     let repeatCount = requiredLength - valueLength;

//     let out = `${'0'.repeat(repeatCount)}${value}`

//     return out;
// }

let index = 0;

const callbackFn = function () {

    index++;
    document.getElementById('time').innerHTML = `Salam-${index}`

}
// 
setTimeout(callbackFn, 2000);


function setTimeout2(callFn, interval) {
    // a = a + 1;
    /// Delay for interval

    callFn();

}

let ind = 0;
function startTime() {
    ind++;
    document.getElementById('time').innerHTML = `Recursion-${ind}`;
    var t = setInterval(startTime, 1000);
}






