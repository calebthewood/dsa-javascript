# Day 1:1480. Running Sum of 1d Array

def runningSum(nums):
    """
    :type nums: List[int]
    :rtype: List[int]

    [1,2,3] >> [1,3,6]
    """
    running_sums = []
    running_sum = 0
    for num in nums:
        running_sum += num
        running_sums.append(running_sum)
    return running_sums