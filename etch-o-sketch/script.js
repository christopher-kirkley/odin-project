const renderBoard = () => {
    const body = document.querySelector('body');
    const main = document.createElement('div');
    main.classList.add('main');

    for (let y = 0; y < 16; y++) {
        const col = document.createElement('div');
        col.classList.add('col');
        for (let y = 0; y < 16; y++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.innerText = 'o';
            row.style = "display: inline";
            col.appendChild(row);
        }
        main.appendChild(col);
    }

    body.prepend(main);

}

renderBoard();
