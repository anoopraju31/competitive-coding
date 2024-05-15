class Solution(object):
    def maximumSafenessFactor(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        N = len(grid)

        def in_bounds(r, c):
            return min(r, c) >= 0 and max(r, c) < N

        def precompute():
            theives = deque()
            min_dist = {}

            for r in range(N):
                for c in range(N):
                    if grid[r][c]:
                        theives.append([r, c, 0])
                        min_dist[(r,c)] = 0
            
            while theives:
                r, c, dist = theives.popleft()
                neighbours = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c -1]]

                for r2, c2 in neighbours:
                    if in_bounds(r2, c2) and (r2, c2) not in min_dist:
                        min_dist[(r2, c2)] = dist + 1
                        theives.append([r2, c2, dist + 1])

            return min_dist
            
        min_dist = precompute()
        maxHeap = [(-min_dist[(0, 0)], 0, 0)]
        visited = set()
        visited.add((0, 0))

        while maxHeap:
            dist, r, c = heapq.heappop(maxHeap)
            dist = -dist

            if (r, c) == (N - 1, N - 1): return dist
            
            neighbours = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c -1]]

            for r2, c2 in neighbours:
                if in_bounds(r2, c2) and (r2, c2) not in visited:
                    visited.add((r2, c2))
                    currentDist = min(dist, min_dist[(r2, c2)])
                    heapq.heappush(maxHeap, (-currentDist, r2, c2))

