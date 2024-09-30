addPreProp() and addPreProperty() adds a new pre property making it so you can use without creating an instance
```js
const Class = require('aepl');

let data = [1, 2, 3];


new Class("Main", class {});


Main.addPreProp("reversed", function() {
    return data.reverse();
});


console.log(Main.reversed); // [3, 2, 1]
```

<br>

> ## Class.addPreProp()
> description: adds a new pre property making it so you can use without creating an instance<br>
> calls:
> - addPreProp()
> - addPreProperty()
> - setPreProp()
> - setPreProperty()
> - newPreProp()
> - newPreProperty()