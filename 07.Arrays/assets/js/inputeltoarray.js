let n = prompt('Necə element daxil ediləcək?');

if (isNaN(n) == true) {
    alert('eded daxil edilmelidir');
    // return 0;
}
else{
    let arr = Array();
    for (let index = 0; index < parseInt(n); index++) {
        let a = prompt('bir eded daxil edin')
        if (!isNaN(a))
            arr.push(Number(a));   
    
    }
    console.log('Massiv: ', arr);
}

