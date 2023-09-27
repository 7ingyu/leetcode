/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // stack records the tallest heights
    const stack = [];
    let max = 0;
    for (let i = 0; i <= heights.length; i++) {
        let currHeight = heights[i] || 0;
        let prevTallest = heights[stack[stack.length - 1]];
        while (stack.length && prevTallest >= currHeight) {
            // If current height smaller than previously recorded tallest,
            // go through recorded tallests heights and calculate their max area
            // since that's the biggest they can get
            let idx_of_tallest = stack.pop();
            let idx_of_next_tallest = stack[stack.length - 1];
            let tallestHeight = heights[idx_of_tallest];
            // Width is gonna be the full length up to this point if nothing in stack
            // If nothing in stack, that means this is the shortest so far
            // Otherwise, it's gonna be up until the last record
            // as that record would be shorter than the one just popped
            let width = !stack.length ? i : i - 1 - idx_of_next_tallest;
            // Calculate max area for previous tallest bar
            max = Math.max(max, tallestHeight * width);
            // Get next tallest
            prevTallest = heights[idx_of_next_tallest];
        }
        // If nothing in stack
        // or current height is taller than previously recorded tallest height
        stack.push(i)
    }
    return max;
};