class Solution
{
public:
    int f(int x, vector<int> &nums)
    {
        // All the pairs (i, x) where A[i] == A[x] and A is the prefix till x.
        // A = [nums[0], nums[1], ..., nums[x]]

        int cnt = 0;

        for (int i = 0; i < x; i++)
            if (nums[i] == nums[x])
                cnt++;

        return cnt;
    }

    int numIdenticalPairs(vector<int> &nums)
    {
        // f(x) will compute all the good pairs where x is the RHS
        // For all good pairs, we need to compute f(x) for every possibel value of x.

        int ans = 0;

        for (int x = 0; x < nums.size(); x++)
            ans += f(x, nums);

        return ans;
    }

    int numIdenticalPairs(vector<int> &nums)
    {
        unordered_map<int, int> dist;

        for (int n : nums)
            dist[n] = dist.count(n) ? dist[n] + 1 : 1;

        int count = 0;

        for (int n : nums)
        {
            dist[n] -= 1;
            count += dist[n];
        }

        return count;
    }
};