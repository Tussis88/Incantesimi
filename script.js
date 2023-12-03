window.onload = function () {
    for (let i = 1; i <= 9; i++) {
        var div = document.createElement('div');
        div.className = 'tables';

        var table = document.createElement('table');
        table.id = 'tab_' + i;

        var row = table.insertRow(0);
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');

        th1.className = 'lvl';
        th1.innerHTML = '--';

        th2.innerHTML = 'Livello ' + i;

        th3.className = 'add';
        th3.innerHTML = '0';

        row.appendChild(th1);
        row.appendChild(th2);
        row.appendChild(th3);

        div.appendChild(table);


        var button = document.createElement('button');
        button.className = 'adder';
        button.setAttribute('onclick', "add_row('tab_" + i + "')");
        button.innerHTML = ' + ';

        div.appendChild(button);

        document.body.appendChild(div);
    }
};

function add_row(id) {
    var table = document.getElementById(id);
    var row = table.insertRow(-1); // con il -1 inserisce una nuova riga alla fine della tabella
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.className = 'lvl';
    cell1.innerHTML = '-';
    cell1.addEventListener('click', function () {
        cell1_Clicked(id, row.rowIndex);
    });

    cell2.contentEditable = 'true';

    cell3.className = 'add';
    cell3.innerHTML = 1;
    cell3.addEventListener('click', function () {
        cell3_Clicked(id, row.rowIndex);

    });
    // aggiungi 1 al totale
    var totalValue = table.rows[0].cells[2].innerHTML;
    totalValue++;
    table.rows[0].cells[2].innerHTML = totalValue;

};



function cell3_Clicked(Id, rowIndex) {
    var table = document.getElementById(Id);
    var cellValue = table.rows[rowIndex].cells[2].innerHTML;
    var totalValue = table.rows[0].cells[2].innerHTML;
    cellValue++;
    totalValue++;
    table.rows[rowIndex].cells[2].innerHTML = cellValue;
    table.rows[0].cells[2].innerHTML = totalValue;
};

function cell1_Clicked(Id, rowIndex) {
    var table = document.getElementById(Id);
    var cellValue = table.rows[rowIndex].cells[2].innerHTML;
    var totalValue = table.rows[0].cells[2].innerHTML;
    cellValue--;
    totalValue--;
    table.rows[rowIndex].cells[2].innerHTML = cellValue;
    table.rows[0].cells[2].innerHTML = totalValue;

    if (cellValue == 0) {
        table.deleteRow(rowIndex);
    }
};
