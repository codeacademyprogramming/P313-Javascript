/*
name =>> Samsung Galaxy A30s DS (SM-A307) 
memory=>> 64GB 
color=>> White

x.fullInfo()

Samsung Galaxy A30s DS (SM-A307) 64GB White
*/



// function _fullInfo() {
//     return `${this.name} ${this.memory} ${this.color}`;
// }

const _fullInfo = function () {
    return `${this.name} ${this.memory} ${this.color}`;
}
let _id = 448802;

let product = new Object();
product.id = _id;
product.name = 'Samsung Galaxy A30s DS (SM-A307)';
product.memory = '64GB';
product.color = 'white';
product.fullInfo = _fullInfo;

// console.log(`${product.name} ${product.memory} ${product.color}`);
console.log(product.fullInfo());

