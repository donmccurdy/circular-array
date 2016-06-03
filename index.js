/**
 * Simple circular array data structure, for storing a finitely-sized list of values and
 * automatically dropping values that no longer fit in the array. All operations are O(1).
 * @param {number} size Maximum number of value to retain.
 */
function CircularArray (size) {
  this._index = 0;
  this._size = size;
  this._array = [];
}

CircularArray.prototype._incr = function () { this._index = ++this._index % this._size; };
CircularArray.prototype.array = function () { return this._array; };
CircularArray.prototype.push = function (value) {
  this._array[this._index] = value;
  this._incr();
};

module.exports = CircularArray;
