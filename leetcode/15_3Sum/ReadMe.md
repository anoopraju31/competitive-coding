# 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

### Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

    Explanation: 
        nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
        nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
        nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

### Example 2:
    Input: nums = [0,1,1]
    Output: []
    
    Explanation: The only possible triplet does not sum up to 0.

### Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]

    Explanation: The only possible triplet sums up to 0.
 

### Constraints:
- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 10515


## Solution
- ### Brute Force
    Time Complexity: O(n<sup>3</sup>)
    Space Complexity: O(1)

- ### Two Pointer Method
    - Time Complexity: O(n<sup>2</sup>)
    - Space Complexity: O(1)
### Two Pointer
**Step 1 \:** Sort the nums array.

```javascript
nums = nums.sort((a,b) => a - b)

```
    Before sorting
        nums = [-1,0,1,2,-1,-4]

    After sorting
        nums = [-4, -1, -1, 0, 1, 2]

- **Step 2 \:** Loop through the nums array using 2 pointers i & j.
```javascript
for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue

        let j = i+1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])

                while (nums[j] === nums[j+1]) j++
                while (nums[k] === nums[k-1]) k--
                j++
                k-- 
            } else if (sum > 0) k--
            else j++
        }
    }
```

    For Loop iteration 1
        i = 0
        j = 1
        k = 5
        
        While loop iteration 1
            sum = (-4) + (-1) + 2 = -5
            since, sum < 0,
            j = j+1 = 2
            
        While loop iteration 2
            sum = (-4) + (-1) + 2 = -5
            since, sum < 0,
            j = j+1 = 3
            
        While loop iteration 2
            sum = (-4) + 0 + 2 = -2
            since, sum < 0,
            j = j+1 = 4
            
        While loop iteration 3
            sum = (-4) + 1 + 2 = -1
            since, sum < 0,
            j = j+1 = 5
            
        since j == k, while loop ends
    
    Increment i
    For loop iteration 2
        i = 1
        j = 2
        k = 5
        
        While loop iteration 1
            sum = -1 -1 + 2 = 0
            since, sum == 0, push [-1, -1, 2] to result array
            increment j until nums[j] not equal to nums[j+1]
            similarly, decrement k until nums[k] not equal to nums[k-1]
            so, j = 3 & k = 4
        
        While loop iteration 2
            sum = -1 + 0 + 1
            sum = 0
            since, sum == 0, push [-1, 0, 1] to result array
            increment j until nums[j] not equal to nums[j+1]
            similarly, decrement k until nums[k] not equal to nums[k-1]
            so, j = 4 & k = 3
            Since j > k, while loop ends
       
    Increment i
    For loop iteration 3
        i = 2
        Since nums[i] == nums[i-1] 
        Increment i
        
    For loop iteration 4
        i = 3
        j = 4
        k = 5
        
        While loop iteration 1  
            sum = 0 - 1 + 2 = 1
            since sum > 1 k = k-1
            since k < j, while loop ends
    
    Increment i
    Since, i == nums.length - 2
    For loop ends
    
    Therefore, res = [[-1, -1, 2], [-1, 0, 1]]
            
            
            
            
