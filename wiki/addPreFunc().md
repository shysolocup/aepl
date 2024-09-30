addPreFunc() and addPreFunction() adds a new pre function making it so you can use without creating an instance
```js
const Class = require('aepl');

let data = [1, 2, 3];


new Class("Main", class {});


Main.addPreFunc("reverse", function() {
    return data.reverse();
});


console.log(Main.reverse()); // [3, 2, 1]
```

<br>

> ## Class.addPreFunc()
> description: adds a new pre function making it so you can use without creating an instance<br>
> calls:
> - addPreFunc()
> - addPreFunction()
> - setPreFunc()
> - setPreFunction()
> - newPreFunc()
> - newPreFunction()