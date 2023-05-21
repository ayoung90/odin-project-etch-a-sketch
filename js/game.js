const boardHeight = 16;
const boardWidth = 16;

//styles
const cellClass = "cell";
const rowClass = "row";
const hoveredClass = "hovered";

function renderBoard() {
  let canvas = document.querySelector("#canvasContainer");

  for (i = 0; i < boardHeight; i++) {
    //create a div per row
    let row = document.createElement("div");
    row.classList.add(rowClass);
    for (j = 0; j < boardWidth; j++) {
      //create a div per column
      let column = document.createElement("div");
      column.classList.add(cellClass);
      row.appendChild(column);
    }

    canvas.appendChild(row);
  }
}

function changeColor(event) {
  event.target.classList.add(hoveredClass);
}
function resetBoard() {
  let cellsToReset = document.querySelectorAll(`.${hoveredClass}`);
  cellsToReset.forEach((cell) => {
    cell.classList.remove(hoveredClass);
  });
}

renderBoard();

let cells = document.querySelectorAll(`.${cellClass}`);

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", changeColor);
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetBoard);
