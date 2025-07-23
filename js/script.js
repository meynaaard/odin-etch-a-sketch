const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
  for (let j = 0;  j < 16; j++) {
    const gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare);
    gridSquare.classList.add('grid-square');
  }
}
