from collections import namedtuple, deque

class Solution(object):
    def maxProfitAssignment(self, difficulty, profit, workers):
        """
        :type difficulty: List[int]
        :type profit: List[int]
        :type worker: List[int]
        :rtype: int
        """
        WorkJob = namedtuple('WorkJob', ['difficulty', 'profit'])
        workers.sort()

        work_queue = deque(sorted(list(WorkJob(d, p) for d, p in zip(difficulty, profit)), key=lambda w: w[0]))
        current_profit = 0
        best_job = 0

        for worker in workers:
            while len(work_queue) > 0 and work_queue[0].difficulty <= worker:
                wj = work_queue.popleft()
                best_job = max(best_job, wj.profit)

            current_profit += best_job

        return current_profit