const gridContainer = document.querySelector('.grid-container');
const sizeButton = document.querySelector('.size-button');

createGrid(16); // Create initial 16x16 grid

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement('div');
      gridContainer.appendChild(gridSquare);
      gridSquare.classList.add('grid-square');
      gridSquare.style.width = `calc(100% / ${gridSize})`;
    }
  }
  
  const gridSquares = gridContainer.querySelectorAll('.grid-square');

  gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseenter', draw);
  });

  gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseleave', removeEventHandler);
  });
}

function draw(event) {
  const target = event.target;

  if (!target.classList.contains('hovered')) {
    target.classList.add('hovered');
  }
}

function removeEventHandler(event) {
  const target = event.target;

  target.removeEventListener('mouseenter', draw);
  target.removeEventListener('mouseleave', removeEventHandler);
}

sizeButton.addEventListener('click', () => {
  const gridSize = parseInt(prompt('Change sketchpad size: (100 max)', 0));
  const gridSquares = gridContainer.querySelectorAll('.grid-square');

  if (gridSize > 0 && gridSize <= 100) {
    gridSquares.forEach(gridSquare => {
      gridSquare.remove();
    });

    createGrid(gridSize);
  }
});