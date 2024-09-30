init() is an alternative to new Class()
```js
const Class = require('aepl');

Class.init("Main", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


Main.new("func", "reverse", function() {
    return this.data.reverse();
});


let main = new Main();

console.log(main.reverse()); // [3, 2, 1]
```
