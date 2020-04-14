function isPalindrome(string) {
  // Write your code here.
	const stoppingIndex = Math.floor(string.length / 2);
	for (let i = 0; i < stoppingIndex; i++) {
		const first = string[i];
		const second = string[string.length - (i + 1)];
		if (first !== second) return false;
	}
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
