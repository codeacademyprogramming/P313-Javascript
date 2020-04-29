/*
  11) 1-1000 qeder ederlerin icerisinden  ele   ededleri cap etki :
	   hem polindrom olsun, //f1
	   hem ededin reqemleri daxilinde 3 olmasin  //f3
	   hem ededin reqemleri cemi 10 dan boyuk olsun //f2
*/
//12321
//123341
for (let eded = 1; eded <= 1000; eded++) {
    let arr = f1(eded);
    let polindrom = true;

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            polindrom = false;
            break;
        }
    }

    if (polindrom == true) {
        let ededde3var = f3(arr, 3);
        if (ededde3var == false) {
            let cem = f2(arr);
            if (cem > 10) {
                console.log(eded);
            }
        }
    }




}

function f1(eded) {
    let arr = [];

    // let temp = eded;//dinamik

    while (eded > 0) {
        let reqem = eded % 10;

        // arr.push(reqem);
        arr.unshift(reqem);

        eded = Math.floor(eded / 10);
    }

    // console.log(arr);

    return arr;
}

function f2(reqemler) {
    let cem = 0;

    for (let index = 0; index < reqemler.length; index++) {

        // let reqem = reqemler[index];

        // cem = cem + reqem;

        cem += reqemler[index];

    }

    return cem;
}
//1333
//1311

function f3(reqemler, axtarilanReqem) {
    // let reqemler = [1, 2], axtarilanReqem = 3;//static
    let result = false;

    for (let index = 0; index < reqemler.length; index++) {
        const reqem = reqemler[index];

        if (reqem == axtarilanReqem) {
            result = true;
            break;
        }
    }

    return result;
}