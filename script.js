const tables = ['tab_1', 'tab_2'];
var totalTables = tables.length;

function check_table_lenght(id) {
    var table = document.getElementById(id);
    var rowCount = table.rows.length;
    return rowCount - 1;
};

function add_row(id, liv) {
    var table = document.getElementById(id);
    var row = table.insertRow(-1); // con il -1 inserisce una nuova riga alla fine della tabella
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.className = 'lvl';
    cell1.innerHTML = liv;
    cell1.addEventListener('click', function () {
        cell1_Clicked(id, row.rowIndex);
    });

    cell2.contentEditable = 'true';

    cell3.innerHTML = 1;
    cell3.addEventListener('click', function () {
        cell3_Clicked(id, row.rowIndex);
    });

};



function cell3_Clicked(Id, rowIndex) {
    var table = document.getElementById(Id);
    var cellValue = table.rows[rowIndex].cells[2].innerHTML;
    cellValue++;
    table.rows[rowIndex].cells[2].innerHTML = cellValue;

    console.log('cella toccata ' + Id + ' alla riga ' + rowIndex + '. Valore: ' + cellValue);
};

function cell1_Clicked(Id, rowIndex) {
    var table = document.getElementById(Id);
    var cellValue = table.rows[rowIndex].cells[2].innerHTML;
    cellValue--;
    table.rows[rowIndex].cells[2].innerHTML = cellValue;

    if (cellValue == 0) {
        table.deleteRow(rowIndex);
    }
}

// // Tasto per cancellare l'ultima riga (eliminato)
// function del_row(id) {
//     lastRow = check_table_lenght(id);
//     if (lastRow >= 1) {
//         document.getElementById(id).deleteRow(lastRow);
//     };
// };