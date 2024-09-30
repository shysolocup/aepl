Properties are just good old variables inside of classes. <br>
If you put a function in while creating a property it'll run that function everytime that the value is gotten<br>
They can be set by overwriting them with a new value or by using Class.setProp()
```js
const Class = require('aepl');


// creates a new class named Example
new Class("Example", class {
    constructor() {
        this.data = [1, 2, 3, 4];
    }
});


// creates a new property named thing that'll return "thing"
new Example.Property("thing", "thing");


// creates a new property named reversed that'll return a reversed version of the data
new Example.Property("reversed", function() {
    return this.data.reverse();
});


// creates a new instance of the class
let example = new Example();


console.log(example.thing); // "thing"
console.log(example.reversed); // [4, 3, 2, 1]
```

<br>

> ## Class.Property
> description: creates a new property <br>
> calls:
> - Property/property
> - Prop/prop
>
> parameters:
> - name `String`: name of the property
> - value `Any`: value of the property (can be a function)
> ```js
> new Class("Example", class { /* class info */ });
>
> new Example.Property("a", "value");
> new Example.Property("b", function() { /* property info */ });
>
> let example = new Example();
>
> example.a; // returns "value"
> example.b; // returns whatever's in the function
> ```