function caesarCipherEncryptor(string, key) {
  // Write your code here.
	const a = 'a'.charCodeAt();
	const z = 'z'.charCodeAt();
	const newChars = [];
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i].charCodeAt();
		const newCharCode = ((char + key - a) % (26)) + a;
		newChars.push(String.fromCharCode(newCharCode));
	}
	
	return newChars.join('');
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
