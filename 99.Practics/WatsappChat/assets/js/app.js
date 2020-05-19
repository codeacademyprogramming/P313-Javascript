let mine = 'kamran';
let myFriend = 'nicat';
var sms = new Audio('assets/sounds/sms.mp3');

bindFunctionality(mine, myFriend);
bindFunctionality(myFriend, mine);


function bindFunctionality(mine, myFriend) {
    let btn = document.querySelector(`#${mine} .send`);
    let txtMessage = document.querySelector(`#${mine} .text-message`);
    let messageList = document.querySelector(`#${mine} .messages`);
    let messageListFriend = document.querySelector(`#${myFriend} .messages`);

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        let messageText = txtMessage.value;

        if (messageText.length < 1)
            return;


        setTimeout(function () {
            let messageFriend = document.createElement('li');
            let div = document.createElement('div');
            div.innerHTML = messageText;
            messageFriend.appendChild(div);
            messageListFriend.appendChild(messageFriend);
            sms.play();
        }, 1000);

        let message = document.createElement('li');
        message.classList.add('me');
        let div = document.createElement('div');
        div.innerHTML = messageText;
        message.appendChild(div);

        messageList.appendChild(message);

        txtMessage.value = '';

    });

    txtMessage.addEventListener('keypress', function (e) {
        if (e.charCode == 13) {
            e.preventDefault();

            btn.click();
        }
    });
}