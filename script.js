let containerGrid = document.getElementById("container-grid");


function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            containerGrid.appendChild(cell);
        }
    }
};


function defaultGrid() {
    createGrid(16, 16);
    containerGrid.style.display = 'grid';
    containerGrid.style.gridTemplateColumns = 'repeat(16, 31.25px)';
    containerGrid.style.gridTemplateRows = 'repeat(16, 31.25px)';
    containerGrid.style.gridGap = '1px';
};
defaultGrid();


function createNewGrid() {
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
    };
    let newGrid = prompt("On a scale of 1 to 10 how many square per side do you want in a grid:", '');
    createGrid(newGrid, newGrid);
    containerGrid.style.display = 'grid';
    containerGrid.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
    containerGrid.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
    containerGrid.style.gridGap = '1px';
    console.log(containerGrid); 
};


let resizeBtn = document.getElementById('resize');
resizeBtn.addEventListener('click', function() {
    createNewGrid();
});


let colorOption = document.getElementById('color-option');

function randomGreyHex() {
    //bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
    let v = (Math.random()*(256)|0).toString(16);
    return "#" + v + v + v;
};

containerGrid.addEventListener('mouseover', function(e) {
    // To make sure that the parent element in not the targeted
    if (e.target != e.currentTarget) {
        if (colorOption.value == 'black') {
            e.target.style.background = 'black';
        } else if (colorOption.value =='random-rainbow') {
            e.target.style.background = '#'+Math.floor(Math.random()*
                16777215).toString(16);
        } else if (colorOption.value == 'random-grayscale') {
            e.target.style.background = randomGreyHex();
        }
    }
});


let cells = containerGrid.children;
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
    //console.log();
    for (i = 0; i < cells.length; i++) {
        if (!((cells[i]).getAttribute("style") == null)) {
            cells[i].removeAttribute('style');
        }
    }
}); 