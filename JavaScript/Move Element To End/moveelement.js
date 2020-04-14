function moveElementToEnd(array, toMove) {
  // Write your code here.
	let insertSpot = array.length - 1;
	
	for (let i = insertSpot; i >= 0; i--) {
		const x = array[i];
		
		if (x === toMove) {
			if (i < insertSpot) {
				let temp = array[insertSpot];
				array[insertSpot] = x;
				array[i] = temp;
			}
			insertSpot--;
		}
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
