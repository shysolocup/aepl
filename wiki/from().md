the from function is similar to the init function but it doesn't have a name parameter because it carries over the name of the class entered<br>
if the class doesn't have a name it defaults to "Unnamed"
```js
const Class = require('aepl');


// creates a normal class
class A {
    constructor() {
        this.data = [1, 2, 3];
    }
}


// creates the new aepl class
Class.from(A);


// creates a new prop called test
A.newProp("test", function() {
    return this.data.reverse();
});


// creates a new instance
let a = new A();


console.log(a); // A { data: [1, 2, 3] }
console.log(a.test); // [3, 2, 1]
```

<br>

its main use is for having separate names for classes along with Class.setName()

<br>

```js
const Class = require('aepl');


// creates a normal class
class A {
    constructor() {
        this.data = [1, 2, 3];
    }
}


// creates the new aepl class
Class.from(A);


// creates a new prop called test
A.newProp("test", function() {
    return this.data.reverse();
});


// sets the name of the class
A.setName("B");


// creates a new instance of B
let b = new B();


console.log(b); // A { data: [1, 2, 3] }
console.log(b.test); // [3, 2, 1]
```
