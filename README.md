# Circular Array


[![Latest NPM release](https://img.shields.io/npm/v/circular-array.svg)](https://www.npmjs.com/package/circular-array)
[![License](https://img.shields.io/npm/l/circular-array.svg)](https://github.com/donmccurdy/circular-array/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/donmccurdy/circular-array.svg?branch=master)](https://travis-ci.com/donmccurdy/circular-array)

Simple circular array data structure, for storing a finite-length list of values and automatically
dropping values that no longer fit in the array. All operations are O(1).

## Usage

```bash
npm install --save circular-array
```

```javascript
// ES6
import { CircularArray } from 'circular-array';

// CommonJS
const { CircularArray } = require('circular-array');

const gizmos = new CircularArray(3);

                     // gizmo.array() returns:
gizmos.push(gizmo1); //   [gizmo1]
gizmos.push(gizmo2); //   [gizmo1, gizmo2]
gizmos.push(gizmo3); //   [gizmo1, gizmo2, gizmo3]
gizmos.push(gizmo4); //   [gizmo4, gizmo2, gizmo3]
```
