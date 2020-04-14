function ascending(a, b) {
	return a - b;
}

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	const a1 = arrayOne.sort(ascending);
	const a2 = arrayTwo.sort(ascending);
	const smallestInts = [];
	let smallest = Infinity;
	let current = Infinity;
	let l = 0;
	let r = 0;
	
	while (l < a1.length && r < a2.length) {
		let x = a1[l];
		let y = a2[r];
		
		if (x < y) {
			current = y - x;
			l += 1;
		} else if (x > y) {
			current = x - y;
			r += 1;
		} else return [x, y];
		
		if (current < smallest) {
			smallest = current;
			smallestInts[0] = x;
			smallestInts[1] = y;
		}
	}
	
	return smallestInts;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
