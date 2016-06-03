# Circular Array

Simple circular array data structure, for storing a finitely-sized list of values and automatically
dropping values that no longer fit in the array. All operations are O(1).

## Usage

```bash
npm install --save circular-array
```

```javascript
var CircularArray = require('circular-array');

var gizmos = new CircularArray(3);

                     // gizmo.array() returns:
gizmos.push(gizmo1); //   [gizmo1]
gizmos.push(gizmo2); //   [gizmo1, gizmo2]
gizmos.push(gizmo3); //   [gizmo1, gizmo2, gizmo3]
gizmos.push(gizmo4); //   [gizmo4, gizmo2, gizmo3]
```
