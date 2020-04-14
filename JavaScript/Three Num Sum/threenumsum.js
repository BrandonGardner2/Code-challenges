function threeNumberSum(array, targetSum) {
  // Write your code here.
	// O(n^3)
	const results = [];
	for (let i = 0; i < array.length - 2; i++) {
		for (let j = i + 1; j < array.length - 1; j++) {
			for (let k = j + 1; k < array.length; k++) {
				const x = array[i];
				const y = array[j];
				const z = array[k];
				if (x + y + z === targetSum) results.push([x, y, z].sort((a ,b) => a - b))
			}
		}
	}
	const r = results.sort((a, b) => {
		if (a[0] === b[0]) {
			if (a[1] === b[1]) {
				return a[2] - b[2];
			}
			return a[1] - b[1];
		}
		return a[0] - b[0];
	});
	return r;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
