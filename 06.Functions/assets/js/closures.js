// function mashiniIsheSalmaq() {
//     let result = false;

//     //acari taxmaq

//     //eyleci sixmaq

//     /////
//     result = turnOnSwitch();


//     //eyleci buraxmaq


//     //closure functions
//     function turnOnSwitch() {
//         console.log('Achari burdunuz...');
//         return true;
//     }


//     return result;
// }


// let cavab = mashiniIsheSalmaq();
// console.log(">> " + cavab);

// if (cavab) {
//     console.log('muherrik ishe dushdu');
// }
// else {
//     console.log('yeniden ceht etmek lazimdir.nese nasazliq var...');
// }






function kvadratinSahesiniTap(teref) //length
{
    //closures
    function kvadratiTap(a) {
        return a * a;
    }


    // let area = teref * teref;
    let area = kvadratiTap(teref);

    let area2 = kvadratiTap(teref / 2);

    let area3 = kvadratiTap(teref / 4);

    return area + area2 + area3;


}



/*
123

8)  1-1000 qeder ederlerin icerisinden,
    daxilinde 3 reqemi olmayib,//f1
    reqemleri cemi 3 olan      //f2
    en sonuncu eded hansidir?



    9)  1-1000 qeder ederlerin icerisinden,
    reqemlerin hasili cut eded olsun,//f1
    reqemleri cemi 3-e tam bolunen      //f2
    en sonuncu eded hansidir?

    cem=0;
hasil=1;

    1234   1*2*3*4  % 2



*/






for (let i = 1000; i >= 1; i--) {

    let reqemCemi = f2(i);

    if (reqemCemi == 3) {

        let _3reqemiVarmi = f1(i, 3);
        //! inverse ====>>

        //false ==> true
        //true ==> false
         if (_3reqemiVarmi == false) 
        //if (!_3reqemiVarmi) 
        {
            console.log(i);
            break;
        }

    }
    //break
}

// let i=1000;
//  f2(i);
//  i=999;
// f2(i);
// i=998;
// f2(i);
// i=997;
// f2(i);
// i=996;
// f2(i);


function f2(eded) {
    let cem = 0;
    // let _r;

    while (eded > 0) {
        // _r = eded % 10;

        cem = cem + eded % 10;

        eded = Math.floor(eded / 10);
    }

    return cem;
}

//121212121242377  4
//ededin daxilinde 3 reqemi var yoxsa yoxdur?

function f1(eded, reqem) {
    let result = false;//function scope
    let _r;//function scope
    while (eded > 0) {
        _r = eded % 10;

        if (_r == reqem) {
            result = true;
            break;
        }

        eded = Math.floor(eded / 10);
    }

    return result;
}


