function productSum(array, depth = 1) {
  // Write your code here.
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		if (typeof current === 'number') sum += current;
		else sum += productSum(current, depth + 1);
	}
	return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
