#include <bits/stdc++.h>
#define MOD 1000000007
using namespace std;

int main()
{
    int n;
    cin >> n;
    vector<int> dp(n + 1);

    dp[0] = 1;

    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= 6; j++)
            if (j <= i)
                dp[i] = (dp[i] + dp[i - j]) % MOD;

    cout << dp[n];
}
