let container = document.querySelector('.container');
let chooseGrid = document.querySelector('.chooseGrid');

function makeGrid(dimensions) {
    for (let i = 0; i < (dimensions ** 2); i++) {
        let colorBox = document.createElement('div');

        colorBox.style.width = `calc(100% / ${dimensions})`;
        colorBox.style.aspectRatio = '1 / 1'
        colorBox.style.border = '1px solid black';
        colorBox.style.boxSizing = 'border-box';

        container.appendChild(colorBox);
    }
}

makeGrid(16);

chooseGrid.addEventListener('click', () => {
    let gridSize = prompt('Choose a grid size below 100');
    while (!(gridSize <= 100)) {
        gridSize = prompt('Choose a grid size below 100');
    }
    container.innerHTML = '';
    makeGrid(gridSize);
})

container.addEventListener('mouseover', (e) => {
    if (e.target !== container) {
        e.target.style.backgroundColor = "blue";
    }
});