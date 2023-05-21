const boardHeight = 16;
const boardWidth = 16;

function renderBoard() {
  let canvas = document.querySelector("#canvasContainer");

  for (i = 0; i < boardHeight; i++) {
    //create a div per row
    let row = document.createElement("div");
    row.classList.add("row");
    for (j = 0; j < boardWidth; j++) {
      //create a div per column
      let column = document.createElement("div");
      column.classList.add("cell");
      row.appendChild(column);
    }

    canvas.appendChild(row);
  }
}

renderBoard();