/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let record = {rows: [], cols: [], boxes: []}
    for (let row = 0; row < 9; row ++) {
        record.rows[row] = {};
        for (let col = 0; col < 9; col ++) {
            record.cols[col] = record.cols[col] === undefined ? {} : record.cols[col];
            let val = board[row][col];
            if (val !== '.') {
                val = Number(val);
                // Check rows
                if (record.rows[row][val] === undefined && val > 0 && val < 10) {
                    record.rows[row][val] = val;
                } else {
                    return false;
                }
                // Check cols
                if (record.cols[col][val] === undefined && val > 0 && val < 10) {
                    record.cols[col][val] = val;
                } else {
                    return false;
                }
                // Check boxes
                let box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
                record.boxes[box] = record.boxes[box] === undefined ? {} : record.boxes[box];
                if (record.boxes[box][val] === undefined && val > 0 && val < 10) {
                    record.boxes[box][val] = val;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};