# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def removeLeafNodes(self, root, target):
        """
        :type root: TreeNode
        :type target: int
        :rtype: TreeNode
        """
        def traversal(node):
            if node and not node.left and not node.right:
                return node.val == target
            if node.left and traversal(node.left):
                node.left = None
            if node.right and traversal(node.right):
                node.right = None
            if not node.left and not node.right:
                return node.val == target

        isTarget = traversal(root)

        if isTarget:
            return None
        
        return root