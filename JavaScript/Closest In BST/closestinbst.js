function findClosestValueInBst(tree, target) {
  // Write your code here.
	let closest = {
		value: tree.value,
		dif: Math.abs(tree.value - target)
	};
	let queue = [tree];
	
	while (queue.length) {
		const curNode = queue[0];
		if (curNode.value === target) return curNode.value;
		if (curNode.left) queue.push(curNode.left);
		if (curNode.right) queue.push(curNode.right);

		const curDif = Math.abs(curNode.value - target);
		if (curDif < closest.dif) {
			closest.value = curNode.value;
			closest.dif = curDif;
		}
		
		queue.shift();
	}
	
	return closest.value;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
