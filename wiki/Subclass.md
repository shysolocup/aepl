you can use new x.Class(), new x.Subclass(), new x.SubClass(), or new x.Sub() to create a new sub class
```js
const Class = require('aepl');


// creates a new class named A
new Class("A", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


// creates a new subclass named B
new A.Class("B", class {
   constructor() {
        this.data = [4, 5, 6];
   }
});


// creates a new instance of A
let a = new A();

console.log(a.data); // [1, 2, 3]

// creates a new instance of B
let b = new a.B();

console.log(b.data); // [4, 5, 6]
```

<br>

> ## Class.Subclass
> description: creates a new subclass <br>
> calls:
> - Class/class
> - SubClass/Subclass/subclass
> - Sub/sub
>
> parameters:
> - name `String`: name of the subclass
> - value `Any`: class to create using (usually a class but it can also just be a value)
> ```js
> new Class("Example", class { /* class info */ });
>
> new Example.Class("A", class { /* class info */ });
> new Example.Class("B", "value");
>
> let example = new Example();
>
> let a = new example.A(); // whatever's in the class
> let b = new example.B(); // returns "value"
> ```