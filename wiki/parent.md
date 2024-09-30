parent is used in subclasses to get elements from the original class

```js
const Class = require('aepl');


// creates a new class called A
new Class("A", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


// creates a subclass called B
new A.Class("B", class {
    constructor() {
        let data = this.parent.data; // gets the data from class A

        let last = data[data.length]; // gets the last number from the data
        
        data.push(last+1); // adds 4 to the data
    }
});


// creates a new instance of class A
let a = new A();

console.log(a.data); // [1, 2, 3]

// creates a new instanceof class B adding 4 to the data
let b = new a.B();

console.log(a.data); // [1, 2, 3, 4]
```