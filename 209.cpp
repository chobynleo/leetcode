class Solution {
public:
    int minSubArrayLen(int target, vector<int>& input) {
        vector<int> sum(1,0);
        int len = input.size();
        for (int i = 0; i < len; ++i) sum.push_back(sum[i] + input[i]);

        int l = 0, r = -1, tarlen = len + 1, tarsum = 1e7 + 5;
        for (int i = 1; i <= len; ++i) {
            if (sum[i] <target) continue;
            for (int j = i - 1; j >= 0 && i - j <= tarlen; --j) {
                int midsum = sum[i] - sum[j];
                int midlen = i - j;
                if (midsum >= target) {
                    if (midlen < tarlen) {
                        l = j + 1; r = i; tarlen = midlen; tarsum = midsum;
                        break;
                    } else if (midlen == tarlen) {
                        if (midsum <tarsum) {
                            if (midsum < tarsum) {
                                l = j + 1; r = i; tarlen = midlen; tarsum = midsum;
                                break;
                            }
                        }
                    }
                }
            }
        }
        vector<int> ans;
        for (int i = l - 1; i < r; ++i) ans.push_back(input[i]);
        return ans.size();
    }
};