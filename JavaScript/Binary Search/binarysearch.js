function binarySearch(array, target, add = 0) {
	if (array.length === 0) return -1;
	if (array.length === 1) {
		const value = array[0];
		if (value === target) return add;
		return -1;
	}
	
	const middle = Math.floor((array.length - 1) / 2);
	const val = array[middle];
	if (val === target) return middle + add;
	else if (val < target) {
		const nextArr = array.slice(middle + 1);
		const nextAdd = array.length - nextArr.length + add;
		return binarySearch(nextArr, target, nextAdd);
	} else {
		const nextArr = array.slice(0, middle);
		return binarySearch(nextArr, target, add);
	}
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
