addProp() and addProperty() adds a new property
```js
const Class = require('aepl');


new Class("Main", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


Main.addProp("reversed", function() {
    return this.data.reverse();
});


let main = new Main();

console.log(main.reversed); // [3, 2, 1]
```

<br>

> ## Class.addProp()
> description: adds a new property<br>
> calls:
> - addProp()
> - addProperty()
> - setProp()
> - setProperty()
> - newProp()
> - newProperty()
> - addP()
> - setP()
> - newP()