function i(i){this._index=0,this._size=i,this._array=[]}i.prototype._incr=function(){this._index=++this._index%this._size},i.prototype.array=function(){return this._array},i.prototype.push=function(i){this._array[this._index]=i,this._incr()};export{i as CircularArray};
//# sourceMappingURL=circular-array.module.js.map
