```js
const cl = require('aepl');


// main class
let m = cl.init("Main", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


m.newF("reverse", function() {
    return this.data.reverse();
});


// layer class
let l = m.newC("Layer", class {
    constructor() {
        this.data = [4, 5, 6];
    }
});


l.newF("reverse", function() {
    return this.data.reverse();
});


l.newP("mainData", function() {
    return this.parent.data;
});


// creates new main instance
let main = new Main();


console.log(main.data); // [1, 2, 3]


// creates a new layer instance
let layer = new main.Layer();


console.log(layer.data); // [4, 5, 6]
console.log(layer.mainData); // [1, 2, 3]


console.log(main.reverse()); // [3, 2, 1]
console.log(layer.reverse()); // [6, 5, 4]
```