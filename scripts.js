function printGrid(size) {
    size = parseInt(size);  // Ensure size is an integer
    var i = 0;
    while (i < size * size) {  // Adjust to create a square grid
        var div = document.createElement("div");
        div.className = "child";
        div.style.width = (1000 / size) + 'px';  // Adjust width
        div.style.height = (1000 / size) + 'px';  // Adjust height
        div.addEventListener("mouseenter", function() {
            this.classList.toggle("toggled");
        });
        document.getElementById("container").appendChild(div);
        i++;
    }
}

function resize() {
    let newsize = parseInt(prompt("Resize? 1-100"));  // Ensure newsize is an integer
    if (!isNaN(newsize) && newsize > 0 && newsize <= 100) {  // Validate input
        document.getElementById('container').innerHTML = "";
        printGrid(newsize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

// Assuming you have an element with id="container" in your HTML
// <div id="container"></div>

// Call the function initially to create a grid
printGrid(10);  // For example, create a grid with size 10 initially
