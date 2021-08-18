class Solution {
public:
    int numDecodings(string s) {
        vector<int> solutions(s.size() + 1, 0);
        for (int i = 0; i < s.size(); i++) {
            int oneDigit = stoi(s.substr(i, 1));
            int twoDigit = i ? stoi(s.substr(i - 1, 2)) : 0;
            twoDigit = (twoDigit >= 10 && twoDigit <= 26) ? twoDigit : 0;
            
            if (oneDigit && twoDigit) {
            solutions[i + 1] = max({solutions[i - 1] + solutions[i], solutions[i] + 1, 1});
            } else if (oneDigit) {
                solutions[i + 1] = max(solutions[i], 1);
            } else if (twoDigit) {
                solutions[i + 1] = max(solutions[i - 1], 1);
            } else {
                return 0;
            }
        }
        return solutions[s.size()];
    }
};