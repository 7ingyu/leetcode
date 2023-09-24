function trap(height: number[]): number {
  let left: number = 0;
  let right: number = height.length - 1;
  let trapped: number = 0;
  let leftPeak: number = 0;
  let rightPeak: number = 0;
  // console.log(height);
  while (left <= right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    if (leftHeight <= rightHeight) {
      // console.log('left', left, 'smaller than', 'right', right);
      leftPeak = Math.max(leftHeight, leftPeak);
      if (leftHeight < leftPeak) trapped += leftPeak - leftHeight;
      left ++;
    } else {
      // console.log('left', left, 'bigger than', 'right', right);
      rightPeak = Math.max(rightHeight, rightPeak);
      if (rightHeight < rightPeak) trapped += rightPeak - rightHeight;
      right --;
    }
    // console.log('leftPeak', leftPeak, 'rightPeak', rightPeak, 'trapped', trapped)
  }
  return trapped;
};