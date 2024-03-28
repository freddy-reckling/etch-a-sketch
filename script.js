const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mousemove", function() {
      cell.style.backgroundColor = "black";
    });
    container.appendChild(cell).className = "grid-item";
  };
};

const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
let dimensions = parseInt(prompt("Enter the number of rows and columns you want"));
if (dimensions > 100) {
    alert("Please enter a number less than 100");
    dimensions = parseInt(prompt("Enter the number of rows and columns you want"));
} 
let rows = dimensions;
let cols = dimensions;
makeRows(rows, cols);
});

makeRows(rows, cols); 

