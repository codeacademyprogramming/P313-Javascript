window.addEventListener('load', onLoad);

function onLoad() {

    let btn = document.querySelector('#btnStart');

    //assign
    btn.addEventListener('click', btnClicked);

    let textMessage = document.querySelector('#text_message');
    let btnSend = document.querySelector('#send');

    textMessage.addEventListener('keyup', function () {
        let val = textMessage.value;

        if (val.length > 0) {
            btnSend.addEventListener('click', gonder);
        }
        else {
            btnSend.removeEventListener('click', gonder);
        }
    });



    let gaming = document.querySelector('#gaming');

    gaming.addEventListener('click', actionGame);

    timing();
}

function actionGame() {
  

    console.log('oyun icra edilir....');
}

function timing() {
    let time = document.querySelector('h3').textContent;

    let pid = setInterval(() => {
        if (time <= 0) {
            clearInterval(pid);
            gaming.removeEventListener('click', actionGame);
            // gaming.setAttribute('disabled','');
            return;
        }
        time = time - 1;
        document.querySelector('h3').textContent = time;


    }, 1000);
}


function btnClicked() {
    let btn = document.querySelector('#btnStart');
    let display = document.querySelector('#display');
    // console.log('Duyme klik olundu!');

    // let now = Date();
    // // display.textContent = 'Duyme klik olundu!';
    // display.textContent = now;



    let state = btn.getAttribute('state');

    if (state == null)
        state = 'off';

    // console.log(state);

    if (state == 'off') {
        btn.setAttribute('state', 'on');
        btn.textContent = 'Stop';
        let pid = setInterval(() => {

            let now = Date();
            display.textContent = now;
        }, 1000);

        btn.setAttribute('process-id', pid);
    }
    else {
        btn.setAttribute('state', 'off');
        btn.textContent = 'Start';

        let pid = btn.getAttribute('process-id');

        console.log(pid);
        clearInterval(pid);
        btn.removeAttribute('process-id');
    }

}



function gonder() {
    console.log('gonder funksiyasi cagirildi');

    let textMessage = document.querySelector('#text_message');

    let message = textMessage.value;

    alert(message);
}

let balance = 10;
function onPay() {
    let btn = document.querySelector('#btnPay');
    let amount = document.querySelector('#balance');
    balance = balance - 2;
    amount.textContent = balance;

    if (balance <= 0) {
        btn.removeEventListener('click', onPay);
        console.log('xxxxxxxxxxxx');
    }



}



