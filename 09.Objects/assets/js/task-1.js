/*
name =>> Samsung Galaxy A30s DS (SM-A307)
memory=>> 64GB
color=>> White
Istehsal ili >> 2015
Price   >>   999;

x.fullInfo()

Samsung Galaxy A30s DS (SM-A307) 64GB White (999)
*/

//products

//1.Ucuzdan Bahaya mehsullari siralamaq (sort)
//2.Bahadan ucuza mehsullari siralamaq (sort)
//3.Rengi  white olan mehsullari secmek (filter)
//4.Istehsal ili son 2 il olanlari secmek(filter)


let now = new Date();
let endYear = now.getFullYear();
let beginYear = endYear - 2;





let genders = [{
    id: 1,
    name: 'Kişi',
    nameEn: 'Male'
},
{
    id: 2,
    name: 'Qadın',
    nameEn: 'Female'
}];


let person1 = {
    name: 'Filankes',
    gender: genders[0]

};
