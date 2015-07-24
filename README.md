# Lion and Mouse (Broccoli) Filter

A very silly Broccoli filter (built with `broccoli-filter`, `broccoli-funnel`, and `broccoli-merge-trees`).

This is an `npm` module named `broccoli-lion-and-mouse`, an absurd little BroccoliJS filter. It takes a source tree and outputs a tree containing  two subfolders, `LION` and `mouse`, each containing a full copy of the input tree, but with all `.txt` files converted to ALL UPPERCASE within `LION` and converted to all lowercase in `mouse`.

For a demo please see alanhogan/lion-and-mouse-demo, or run this simple code:

```js
/* Brocfile.js */

var lionAndMouse = require('broccoli-lion-and-mouse');

var demo = lionAndMouse('src', {
  destDir : '/'
});

module.exports = demo;
```

Feedback is welcome. Go ahead and file an issue.
