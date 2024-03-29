# Leet Code 75 Challenge
###################################################### Day 1

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

###################################################### Day 2

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

# 392. Is Subsequence
def isSubsequence(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    i = 0
    for char in t:
        if i >= len(s):
            return True
        if char == s[i]:
            i += 1

    if i >= len(s):
        return True
    return False

def isSubsequenceRecursive(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """

    if len(s) == 0:
        return True
    elif len(t) == 0:
        return False
    elif s[0] == t[0]:
        return self.isSubsequence(s[1:], t[1:])
    else:
        return self.isSubsequence(s, t[1:])

###################################################### Day 3

# 206. Reverse Linked List
def reverseList(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    if not head: return head
    if not head.next: return head
    # Set previous, current, and next values
    tail_node = head
    current_node= head.next
    next_node = current_node.next
    tail_node.next = None
    # Reverse body of the list
    while next_node:
        current_node.next = tail_node
        tail_node = current_node
        current_node = next_node
        next_node = next_node.next
    # Reverse final node, the new head
    current_node.next = tail_node

    return current_node


# 206. Reverse Linked List
def reverseList(shead):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    if not head: return head
    if not head.next: return head
    # Set previous, current, and next values
    tail_node = head
    current_node= head.next
    next_node = current_node.next
    tail_node.next = None
    # Reverse body of the list
    while next_node:
        current_node.next = tail_node
        tail_node = current_node
        current_node = next_node
        next_node = next_node.next
    # Reverse final node, the new head
    current_node.next = tail_node

    return current_node

###################################################### Day 4

def middleNodeFast(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    # basic edge cases
    if not head: return head
    if not head.next: return head
    # init 2 pointers
    fast_node = head
    slow_node = head
    # fast node will move 2x slow nodes
    while fast_node:
        fast_node = fast_node.next
        if fast_node:
            slow_node = slow_node.next
            fast_node = fast_node.next
    # slow node has moved half the distance of fast node
    return slow_node

def middleNodeList(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    # Basic edge cases
    if not head: return head
    if not head.next: return head
    nodes = []
    # Create list of nodes
    current_node = head
    while current_node:
        nodes.append(current_node)
        current_node = current_node.next
    # Return node in middle of list
    mid = len(nodes)//2
    return nodes[mid]

def middleNodeBrute(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    # Basic edge cases
    if not head: return head
    if not head.next: return head
    # Move through entire list to find length
    length = 0
    current_node = head
    while current_node:
        length += 1
        current_node = current_node.next
    # Start over, and move to halfway point
    term = length//2
    current_node = head
    while term > 0:
        term -= 1
        current_node = current_node.next

    return current_node