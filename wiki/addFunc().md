addFunc() and addFunction() adds a new function
```js
const Class = require('aepl');


new Class("Main", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


Main.addFunc("reverse", function() {
    return this.data.reverse();
});


let main = new Main();

console.log(main.reverse()); // [3, 2, 1]
```

<br>

> ## Class.addFunc()
> description: adds a new function<br>
> calls:
> - addFunc()
> - addFunction()
> - setFunc()
> - setFunction()
> - newFunc()
> - newFunction()
> - addF()
> - setF()
> - newF()