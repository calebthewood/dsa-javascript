# Day 1

# 1480. Running Sum of 1d Array
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

# 724. Find Pivot Index
def pivotIndex(nums):
    """
    :type nums: List[int]
    :rtype: int

    [1,7,3,6,5,6] >> 3
    """
    running_sums = runningSum(nums)
    total_sum = running_sums[-1]
    left_sum = 0
    right_sum = total_sum - running_sums[0]
    length = len(nums)
    if left_sum == right_sum: return 0
    for i in range(1, length):
        left_sum = running_sums[i - 1]
        right_sum = total_sum - running_sums[i]
        if left_sum == right_sum:
            return i
    return -1