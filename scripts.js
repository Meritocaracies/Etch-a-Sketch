function printGrid(size) {
var i = 0;
while (i < size) {
var div = document.createElement("div");
document.getElementById("container").appendChild(div);
i++
}
}

function resize () {
    //var newsize = document.getElementById('gridsize').value;
    let newsize = prompt("Resize? 1-100");
    document.getElementById('container').innerHTML = "";
    printGrid(newsize);
}

printGrid(16);