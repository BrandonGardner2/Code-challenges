function findThreeLargestNumbers(array) {
  // Write your code here.
	const largest = array.slice(0, 3).sort((a, b) => a - b);
	
	for (let i = 3; i < array.length; i++) {
		const x = array[i];
		
		if (x > largest[2]) {
			largest[0] = largest[1];
			largest[1] = largest[2];
			largest[2] = x;
		} else if (x > largest[1]) {
			largest[0] = largest[1];
			largest[1] = x;
		} else if (x > largest[0]) {
			largest[0] = x;
		}
	}
	
	return largest;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
