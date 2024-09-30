the setName function is used to create an alternate name for a class
```js
const Class = require('aepl');


// creates a new class named A
Class.new("A", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


// creates a new prop called test
A.newProp("test", function() {
    return this.data.reverse();
});


// sets name to B
A.setName("B");


let b = new B();

console.log(b); // A { data: [1, 2, 3] }
console.log(b.test); // [3, 2, 1]
```

<br><br>

> ## Class.setName()
> description: sets the name of a class<br>
> parameters: 
> - name `String`: name to set to
> - ?autodefine `Boolean`: if it should automatically define as the new name
> 
> refs:
> - setName()
> - setN()