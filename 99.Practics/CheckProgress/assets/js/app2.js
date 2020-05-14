let list = document.querySelector('#list');

let elements = list.children;

console.log(elements);
// elements.onclick = remove;

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];

    element.onclick = remove;

}


let btnRemoveAll = document.querySelector('#removeAll');

btnRemoveAll.addEventListener('click', function () {
    let list = document.querySelector('#list');

    let elements = list.children;

    while (elements.length > 0) {
        const element = elements[0];
        list.removeChild(element);
    }


    // for (let index = 0; index < elements.length; index++) {
    //     const element = elements[index];

    //     list.removeChild(element);

    // }

});

function remove() {
    //parent.removeChild(child);
    let li = this; //child
    let ul = li.parentElement;

    ul.removeChild(li);

    // let a = 3;

    // console.log(a);
    // console.log(3);

    // this.parentElement.addEventListener('click', function () {
    //     console.log(this);
    //     console.log(el);


    // });
}
