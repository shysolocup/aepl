Chores are functions made from strings.<br>
These can be beneficial to know for some occasions
```js
const Class = require('aepl');


// creates a new class named Example
new Class("Example", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


// creates a new chore named add using a string with function data
new Example.Chore("add", "number", "this.data.push(number)");


// creates a new instance of the class
let example = new Example();

console.log(example.data); // [1, 2, 3]

example.add(4);

console.log(example.data); // [1, 2, 3, 4]
```

<br>

> ## Class.Chore
> description: creates a new chore <br>
> calls:
> - Chore/chore
>
> parameters:
> - name `String`: name of the chore
> - ...?parameters `String`: parameters for the chore
> - value `String`: what the chore does
> ```js
> new Class("Example", class { /* class info */ });
>
> new Example.Chore("a", "function data");
> new Example.Chore("b", "arg1", "arg2" "function data");
>
> let example = new Example();
>
> example.a(); // runs whatever's in the function
> example.b(1, 2); // runs whatever's in the function
> ```