const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
  for (let j = 0;  j < 16; j++) {
    const gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare);
    gridSquare.classList.add('grid-square');
  }
}

const gridSquares = document.querySelectorAll('.grid-container .grid-square');
gridSquares.forEach(gridSquare => {
  gridSquare.addEventListener('mouseenter', draw);
});
gridSquares.forEach(gridSquare => {
  gridSquare.addEventListener('mouseleave', removeEventHandler);
});

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