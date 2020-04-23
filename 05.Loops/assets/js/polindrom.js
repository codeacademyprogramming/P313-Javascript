let eded = 12321;
let arr = [];

// 5/2 2.5
// 6/3
let temp = eded;
while (temp > 0) {
    let reqem = temp % 10;

    arr.push(reqem);

    // eded = (eded-reqem)/10
    temp = Math.floor(temp / 10);
}

console.log(arr);

let polindrom = true;

for (let index = 0; index < Math.ceil(arr.length / 2); index++) {

    if (arr[index] != arr[arr.length - index - 1]) {
        polindrom = false;
        break;
    }

    //magic string
    // console.log('arr[' + index + ']=' + arr[index]);

    // console.log(`arr[${index}]=${arr[index]}`);

    // console.log(`arr[${arr.length - index - 1}]=${arr[arr.length - index - 1]}\n---`);
}

if (polindrom == true) {
    // console.log(eded + '-eded polindromdu');
    console.log(`${eded}-eded polindromdu`);
}
else {
    // console.log(eded + '-eded polindrom deyil');
    console.log(`${eded}-eded polindrom deyil`);
}



//12321
//012345
//length-1
//length-2
