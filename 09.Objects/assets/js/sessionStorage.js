

// let author = 'P313';

//x1:   P313
// sessionStorage.setItem('x1',author);




//get value from sessionStorage
// let author = sessionStorage.getItem("x1");

let author;

function showInfo() {
     author = sessionStorage.getItem('author');//read from sessionStorage

    console.log(`author: ${author}`);
}

function saveInfo()
{
    //store value
     sessionStorage.setItem('author','Demo');
}

function remove()
{
    sessionStorage.removeItem('x');
}

function removeAll()
{
    sessionStorage.clear();
}