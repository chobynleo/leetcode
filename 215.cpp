class Solution {
public:
    int findKthLargest(vector<int>& inputs, int k) {
        priority_queue<int, vector<int>, greater<int> > Q;
        int len = inputs.size();
        for (int i = 0; i < len; ++i) {
            int qsize = Q.size();
            if (qsize < k) {
                Q.push(inputs[i]);
            } else {
                if (inputs[i] > Q.top()) {
                    Q.pop();
                    Q.push(inputs[i]);
                }
            }
        }
        return Q.top();
    }
};