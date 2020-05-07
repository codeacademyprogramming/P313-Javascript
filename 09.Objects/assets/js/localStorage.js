
let author;

showInfo();

function showInfo() {
     author = localStorage.getItem('author');//read from localStorage

    console.log(`author: ${author}`);
}

function saveInfo()
{
    //store value
    localStorage.setItem('author','Demo');
}

function remove()
{
    localStorage.removeItem('x');
}

function removeAll()
{
    localStorage.clear();
}