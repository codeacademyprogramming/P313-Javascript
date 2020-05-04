

//5deqiqe sonra bir xatirlatma olsun

function setTimer() {
    let pid = setTimeout(function () {
        console.log('Alarm executed!');
    }, 5000);
    console.log(pid);
}

// clearTimeout(pid)

function infiniteLoop() {
    let index = 0;
    let pid = setInterval(function () {
        console.log(`Alarm executed!/ ${++index}`);
    }, 1000);
    console.log(pid);
}
// clearInterval(pid)


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colored = function () {
    let red = getRndInteger(0, 255),
        green = getRndInteger(0, 255),
        blue = getRndInteger(0, 255);

    document.getElementById('time').style.color = `rgb(${red},${green},${blue})`
}

let pid = setInterval(colored, 600);



// 01:03:40


//01:03:39

//00:00:00

//01:03:37




