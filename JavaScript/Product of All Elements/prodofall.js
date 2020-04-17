function productOfAllEls (nums) {
  const output = [];

  let product = 1;
  for (const num of nums) {
    output.push(product);
    product *= num;
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= product;
    product *= nums[i];
  }

  return output;
}

module.exports = productOfAllEls;