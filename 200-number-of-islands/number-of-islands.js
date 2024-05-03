/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) return 0
    
    const visited = grid.map(arr => arr.map(() => false))
    let count = 0

    const getIsland = (row, col) => {
        const center = grid[row][col]
        // Mark as visited
        visited[row][col] = true
        if (center === '0') {
            // no island to return
            return
        }

        // search left
        if (col - 1 >= 0 && !visited[row][col - 1]) getIsland(row, col - 1)

        // search right
        if (col + 1 < grid[row].length && !visited[row][col + 1]) getIsland(row, col + 1)

        // search top
        if (row - 1 >= 0 && !visited[row - 1][col]) getIsland(row - 1, col)

        // search bottom
        if (row + 1 < grid.length && !visited[row + 1][col]) getIsland(row + 1, col)
    }

    for (let row = 0; row < grid.length; row ++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (!visited[row][col]) {
                if (grid[row][col] === '0') {
                    visited[row][col] = true
                } else {
                    getIsland(row, col)
                    count ++
                }
            }
        }
    }

    return count
};
