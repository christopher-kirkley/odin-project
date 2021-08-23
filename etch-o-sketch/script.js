const clearBoard = () => {
    const container = document.querySelector('.container');
    container.remove();
    console.log(container);
}

const resetGrid = () => {
    do {
        var size = parseInt(prompt("Enter grid size: "));
    } while (isNaN(size) || size < 2 || size > 100) 
    clearBoard();
    renderBoard(size);
}

const renderButton = () => {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = 'Clear';
    button.addEventListener('click', resetGrid)
    body.append(button);
}

const drawCell = function(cell) {
    cell.addEventListener('mouseover', () => cell.classList.add('active'));
}

const renderBoard = (size) => {
    
    const body = document.querySelector('body');
    const container = document.createElement('div');

    // cache dom
    container.classList.add('container');

    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.append(cell);
     }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    body.append(container);


    const cells = document.querySelectorAll('.cell');

    const cellList = [...cells];

    cellList.map((cell) => drawCell(cell));
}

renderButton();
renderBoard(16);
