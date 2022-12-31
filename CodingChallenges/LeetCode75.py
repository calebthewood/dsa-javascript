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

# Day 2

# 205. Isomorphic Strings
def isIsomorphic(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    s_len = len(s)
    t_len = len(t)
    if s_len != t_len: return False
    s_map = dict()
    t_map = dict()
    for i in range(0,s_len):
        s_char = s[i]
        t_char = t[i]
        if s_char in s_map and s_map[s_char] != t_char:
            return False
        elif t_char in t_map and t_map[t_char] != s_char:
            return False
        else:
            s_map[s_char] = t_char
            t_map[t_char] = s_char
    return True

