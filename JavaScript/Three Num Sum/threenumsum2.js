function threeNumberSum(array, targetSum) {
  // Write your code here.
	const sorted = array.sort((a, b) => a - b);
	const results = [];
	
	for (let i = 0; i < sorted.length - 2; i++) {
		let l = i + 1;
		let r = sorted.length - 1;
		while (r > l) {
			const sum = sorted[i] + sorted[l] + sorted[r];
			if (sum === targetSum) {
				results.push([sorted[i], sorted[l], sorted[r]]);
				l += 1;
				r -= 1;
			}
			else if (sum > targetSum) r -= 1;
			else l += 1;
		}
	}
	
	return results;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
