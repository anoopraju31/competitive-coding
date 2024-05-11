#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // double mincostToHireWorkers(vector<int>& quality, vector<int>& expWage, int k) {
    //     int n = expWage.size();
    //     double minCost = numeric_limits<double>::max();

    //     for (int captain = 0; captain < n; captain++) {
    //         double captainRatio = (double)expWage[captain] / quality[captain];
    //         vector<double> acceptedOffers;

    //         for (int worker = 0; worker < n; worker++) {
    //             double offer = quality[worker] * captainRatio;

    //             if (offer >= expWage[worker]) acceptedOffers.push_back(offer);
    //         }

    //         if (acceptedOffers.size() < k) continue;

    //         // find sum of kth smallest elements in acceptedOffers
    //         priority_queue<double, vector<double>> maxHeap;
    //         double sumHeap = 0;

    //         for (int i = 0; i < k; i++) {
    //             maxHeap.push(acceptedOffers[i]);
    //             sumHeap += acceptedOffers[i];
    //         }

    //         for (int i = k; i  < acceptedOffers.size(); i++) {
    //             if (!maxHeap.empty() && acceptedOffers[i] < maxHeap.top()) {
    //                 sumHeap -= maxHeap.top();
    //                 maxHeap.pop();
    //                 maxHeap.push(acceptedOffers[i]);
    //                 sumHeap += acceptedOffers[i];
    //             }
    //         }

    //         double cost = sumHeap;
    //         minCost = min(minCost, cost);
    //     }

    //     return minCost;
    // }

    double mincostToHireWorkers(vector<int> &quality, vector<int> &expWage, int k)
    {
        int n = expWage.size();

        vector<pair<double, int>> workers(n);
        for (int i = 0; i < n; i++)
        {
            double ratio = (double)expWage[i] / quality[i];
            workers[i] = {ratio, quality[i]};
        }
        sort(workers.begin(), workers.end());

        priority_queue<int, vector<int>> maxHeap;
        int sumHeap = 0;
        for (int i = 0; i < k; i++)
        {
            maxHeap.push(workers[i].second);
            sumHeap += workers[i].second;
        }
        double captainRatio = workers[k - 1].first;
        double minCost = captainRatio * sumHeap;

        for (int captain = k; captain < n; captain++)
        {
            captainRatio = workers[captain].first;

            if (!maxHeap.empty() && workers[captain].second < maxHeap.top())
            {
                sumHeap -= maxHeap.top();
                maxHeap.pop();
                maxHeap.push(workers[captain].second);
                sumHeap += workers[captain].second;
            }
            double cost = captainRatio * sumHeap;
            minCost = min(minCost, cost);
        }
        return minCost;
    }
};