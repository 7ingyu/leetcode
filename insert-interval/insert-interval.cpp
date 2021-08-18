bool intervalSort(vector<int> a, vector<int> b) {
    return a[0] == b[0] ? a[1] < b[1] : a[0] < b[0];
}

class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> result;
        
        intervals.push_back(newInterval);
        sort(intervals.begin(), intervals.end(), intervalSort);
        
        vector<int> merged = {intervals[0][0], intervals[0][1]};
        
        for (int i = 1; i < intervals.size(); i ++) {
            int start = intervals[i][0];
            int end = intervals[i][1];
            if (start <= merged[1]) {
                merged[1] = max(merged[1], end);
            } else {
                result.push_back(merged);
                merged[0] = intervals[i][0];
                merged[1] = intervals[i][1];
            }
        }
        result.push_back(merged);
        return result;
    }
};