function allowDrop(ev) {
    ev.preventDefault();
    console.log('allowDrop');
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    console.log(`drag: ${ev.target.id}`);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    ev.target.appendChild(document.getElementById(data));
    console.log("drop ", ev.target);
}