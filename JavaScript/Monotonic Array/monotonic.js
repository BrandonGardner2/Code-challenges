function isMonotonic(array) {
  // Write your code here.
	if (array.length <= 2) return true;
	for (let i = 0; i < array.length; i += 3) {
		const x = array[i];
		const y = array[i + 1] === undefined ? x * 1.1 : array[i + 1];
		const z = array[i + 2] === undefined ? y * 1.1 : array[i + 2];
		
		if ((x <= y && y <= z) || (x >= y && y >= z)) continue;
		return false;
	}
	return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
