class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        vector<vector<int>> rows(10, {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
        vector<vector<int>> cols(10, {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
        vector<vector<int>> boxes(10, {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
        
        for (int row = 0; row < 9; row ++) {
            for (int col = 0; col < 9; col ++) {
                int val;
                if (board[row][col] != '.') {
                    val = static_cast<int>(board[row][col]) - 48;
                    // check rows
                    if (rows[row][val] == 0 && val > 0 && val < 10) {
                        rows[row][val] = val;   
                    } else {
                        return false;
                    }
                    // check cols
                    if (cols[col][val] == 0 && val > 0 && val < 10) {
                        cols[col][val] = val;   
                    } else {
                        return false;
                    }
                    // check boxes
                    int box = 3 * (row / 3) + (col / 3);
                    if (boxes[box][val] == 0 && val > 0 && val < 10) {
                        boxes[box][val] = val;   
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
};