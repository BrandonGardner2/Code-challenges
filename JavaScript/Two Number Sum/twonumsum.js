function twoNumberSum(array, targetSum) {
  // Write your code here.
	const missingPairs = {};
	
	for (let i = 0; i < array.length; i++) {
		const number = array[i];
		if (missingPairs[number]) {
			return [missingPairs[number], number];
		}
		missingPairs[targetSum - number] = number;
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;