Function is used to create new functions for your class
```js
const Class = require('aepl');


// creates a new class named Example
new Class("Example", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


// creates a new function for the Example class
new Example.Function("add", function(number) {
    return this.data.push(number);
});


// creates a new instance of the class
let example = new Example();

console.log(example.data); // [1, 2, 3]

example.add(4);

console.log(example.data); // [1, 2, 3, 4]
```

<br>


> ## Class.Function
> description: creates a new function <br>
> calls:
> - Function/function
> - Func/func
>
> parameters:
> - name `String`: name of the function
> - value `Any`: what the function does (usually a function but can be a normal value)
> ```js
> new Class("Example", class { /* class info */ });
>
> new Example.Function("a", function() { /* function info */ });
> new Example.Function("b", "value");
>
> let example = new Example();
>
> example.a(); // runs whatever's in the function
> example.b(); // returns "value"
> ```