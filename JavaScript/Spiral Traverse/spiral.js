function spiralTraverse(matrix) {
  // Write your code here.
	let startCol = 0;
	let startRow = 0;
	let endCol = matrix[0].length - 1;
	let endRow = matrix.length - 1;
	const results = [];
	
	while (startRow <= endRow && startCol <= endCol) {
		for (let i = startCol; i <= endCol; i++) {
			results.push(matrix[startRow][i]);
		}
		// Down right
		for (let i = startRow + 1; i <= endRow; i++) {
			const row = matrix[i];
			results.push(row[endCol]);
		}
		// Across bottom
		for (let i = endCol - 1; i >= startCol; i--) {
			if (startRow === endRow) break;
			const row = matrix[endRow];
			results.push(row[i]);
		}
		// Up left
		for (let i = endRow - 1; i > startRow; i--) {
			if (startCol == endCol) break;
			const row = matrix[i];
			results.push(row[startCol]);
		}
		
		startCol++;
		startRow++;
		endCol--;
		endRow--;
	}
	return results;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
