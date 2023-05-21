const maxHeightWidth = 100;
let boardHeight = 16;
let boardWidth = 16;

//styles
const cellClass = "cell";
const rowClass = "row";
const hoveredClass = "hovered";

function renderBoard() {
  let canvas = document.querySelector("#canvasContainer");

  // clear canvas if not already empty
  canvas.innerHTML = null;

  for (i = 0; i < boardHeight; i++) {
    //create a div per row
    let row = document.createElement("div");
    row.classList.add(rowClass);
    for (j = 0; j < boardWidth; j++) {
      //create a div per column
      let column = document.createElement("div");
      column.classList.add(cellClass);
      column.addEventListener("mouseenter", changeColor);
      row.appendChild(column);
    }

    canvas.appendChild(row);
  }
}
function setGridSize() {
  let reRender = false;
  let heightInput = window.prompt(
    `Please define board height (under ${maxHeightWidth}):`,
    boardHeight
  );

  if (!heightInput || isNaN(heightInput)) {
  } else if (heightInput > maxHeightWidth) {
    window.alert(
      `Height must be under ${maxHeightWidth}, you entered ${heightInput}`
    );
  } else {
    boardHeight = heightInput;
    reRender = true;
  }

  let widthInput = window.prompt(
    `Please define board width (under ${maxHeightWidth}):`,
    boardWidth
  );

  if (!widthInput || isNaN(widthInput)) {
  } else if (widthInput > maxHeightWidth) {
    window.alert(
      `Width must be under ${maxHeightWidth}, you entered ${widthInput}`
    );
  } else {
    boardWidth = widthInput;
    reRender = true;
  }

  //re-render board with new attributes if one has changes
  if (reRender) {
    renderBoard();
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

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetBoard);

const gridSizeButton = document.querySelector("#gridSize");
gridSizeButton.addEventListener("click", setGridSize);
