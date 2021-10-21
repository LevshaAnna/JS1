
var chessboard = document.getElementById("chessboard");
chessboard.appendChild(getChessBoard());
getChessBoard();



function getChessBoard() {
    var rows = ['', A, B, C, D, E, F, G, H, ' '];
    var cols = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];
    chessboard = document.createElement('table');



    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');

            if ((i == 0 || j == 9) && (i == 9 || j == 0)) {
                td.innerText = rows[i] || cols[j];
            } else if{
                if(i % 2 == j % 2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        chessboard.appendChild(tr);
    }


    return chessboard;
}