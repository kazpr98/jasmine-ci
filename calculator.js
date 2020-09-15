function Calculator() {
  this.total = 0;
}
/**
 * Add a number to total
 * @param {number} num
 * @returns {number} total
 */
Calculator.prototype.add = function (num) {
  return (this.total += num);
};
/**
 * Substract a number to total
 * @param {number} num
 * @returns {number} total
 */
Calculator.prototype.substract = function (num) {
  return (this.total -= num);
};
/**
 * Multiply total with num
 * @param {number} num
 * @returns {number} total
 */
Calculator.prototype.multiply = function (num) {
  return (this.total *= num);
};
/**
 * Divide total by number
 * @param {number} num
 * @returns {number} total
 */
Calculator.prototype.divide = function (num) {
  if (num === 0) {
    throw new Error("Cannot divide by zero");
  }
  return (this.total /= num);
};

Object.defineProperty(Calculator.prototype, "version", {
  get: function () {
    return fetch(
      "https://gist.githubusercontent.com/juanlizarazo/4b2d229ba483ca13b1a6d7bf3079dc8b/raw/228ac05e04118037be02c38d9b86945c1356a2e2/version.json"
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        return json.version;
      });
  },
  enumerable: true,
  configurable: true
});
