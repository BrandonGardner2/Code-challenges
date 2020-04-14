function getNthFib(n) {
  // Write your code here.
	const results = [0 ,1];
	
	while (results.length < n) {
		const first = results[results.length - 1];
		const second = results[results.length - 2];
		
		results.push(first + second);
	}
	
	return results[n - 1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
