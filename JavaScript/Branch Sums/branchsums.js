// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	const sums = [];
	
	findSumOfBranch(root, 0, sums);
	return sums;
}

function findSumOfBranch(tree, sum, sums) {
	const totalSum = sum + tree.value;
		
	if (tree.left) findSumOfBranch(tree.left, totalSum, sums);
	if (tree.right) findSumOfBranch(tree.right, totalSum, sums);
	if (!tree.left && !tree.right) sums.push(totalSum);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
