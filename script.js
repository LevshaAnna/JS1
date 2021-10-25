
var chessboard = document.getElementById("chessboard");// в файле index, есть div с id='chessboard'
chessboard.appendChild(getChessBoard());




function getChessBoard() {
    var rows = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '];
    var cols = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];
    chessboard = document.createElement('table');



    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');

            if ((i == 0 || j == 9) && (i == 9 || j == 0)) {
                td.innerText = rows[i] || cols[j];
            } else {
                td.className = (i % 2 == j % 2) ? "white" : "black";
            }
            tr.appendChild(td);
        }
        chessboard.appendChild(tr);

    }

    console.log(chessboard);
    return chessboard;
}