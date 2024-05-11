#include <bits/stdc++.h>
using namespace std;

vector<int> kthSmallestPrimeFraction(vector<int> &arr, int k)
{
    double l = 0;
    double r = 1;
    double mid;

    while (l < r)
    {
        mid = (l + r) / 2;

        int count = 0;
        for (int i = 0; i < arr.size(); i++)
        {
            auto pos = lower_bound(arr.begin(), arr.end(), arr[i] * 1.0 / mid);
            count += arr.end() - pos;
        }

        if (count < k)
            l = mid;
        else if (count > k)
            r = mid;
        else
            break;
    }

    vector<int> ret;
    double ans = 0;

    for (int i = 0; i < arr.size(); i++)
    {
        auto pos = lower_bound(arr.begin(), arr.end(), arr[i] * 1.0 / mid);
        int j = pos - arr.begin();

        if (pos != arr.end() && arr[i] * 1.0 / arr[j] > ans)
        {
            ans = arr[i] * 1.0 / arr[j];
            ret = {arr[i], arr[j]};
        }
    }

    return ret;
}