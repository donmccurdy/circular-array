/**
 * Simple circular array data structure, for storing a finitely-sized list of values and
 * automatically dropping values that no longer fit in the array. All operations are O(1).
 * @param {number} size Maximum number of value to retain.
 */
function CircularArray (size) {
  this.index = 0;
  this.size = size;
  this.array = new Array(size);
}

CircularArray.prototype.incr = function () { this.index = ++this.index % this.size; };
CircularArray.prototype.array = function () { return this.array(); };
CircularArray.prototype.push = function (value) {
  this.array[this.index] = value;
  this.incr();
};

module.exports = CircularArray;
