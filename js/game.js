// constants
const MAX_HEIGHT_WIDTH = 100;
const DEFAULT_HEIGHT = 16;
const DEFAULT_WIDTH = 16;

let boardHeight = DEFAULT_HEIGHT;
let boardWidth = DEFAULT_WIDTH;

//styles
const cellClass = "cell";
const rowClass = "row";
const hoveredClass = "hovered";

/**
 * Creates a board based on the defined height and width.
 * Resets the board if it has already been created
 */
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
/**
 * Takes user input to define the height and width of the board
 * if either have been set, re-renders with the new attributes
 */
function setGridSize() {
  let reRender = false;
  let heightInput = window.prompt(
    `Please define board height (under ${MAX_HEIGHT_WIDTH}):`,
    boardHeight
  );

  if (!heightInput || isNaN(heightInput)) {
  } else if (heightInput > MAX_HEIGHT_WIDTH) {
    window.alert(
      `Height must be under ${MAX_HEIGHT_WIDTH}, you entered ${heightInput}`
    );
  } else {
    boardHeight = heightInput;
    reRender = true;
  }

  let widthInput = window.prompt(
    `Please define board width (under ${MAX_HEIGHT_WIDTH}):`,
    boardWidth
  );

  if (!widthInput || isNaN(widthInput)) {
  } else if (widthInput > MAX_HEIGHT_WIDTH) {
    window.alert(
      `Width must be under ${MAX_HEIGHT_WIDTH}, you entered ${widthInput}`
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

/**
 * Sets the hovered class to change the colour of the cell
 * @param {*} event
 */
function changeColor(event) {
  event.target.classList.add(hoveredClass);
}
/**
 * resets all cells to default colour by removing the hovered class
 */
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
