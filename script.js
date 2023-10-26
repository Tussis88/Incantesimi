function add_row(id, liv) {
    var table = document.getElementById(id);
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.className = 'lvl';
    cell1.innerHTML = liv;

    cell2.contentEditable = 'true';

    cell3.contentEditable = 'true';

};


function del_row(id) {
    document.getElementById(id).deleteRow(1);
};