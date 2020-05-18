function User(fullName, email, imagePath) {
    this.fullName = fullName;
    this.email = email;
    this.imagePath = imagePath;
}

let currentUser = new User('Filankesov Filankes','test@mail.ru', '2.jpg');
let user2 = new User('Filankesov Filankes-2','test@mail.ru', '2.jpg');

console.log(currentUser);

let img = document.querySelector('.profile .img-container img');
let title = document.querySelector('.profile .title');
let email = document.querySelector('.profile .email');

img.setAttribute('src',`assets/images/${currentUser.imagePath}`);
title.innerHTML=currentUser.fullName;
email.innerHTML=currentUser.email;


