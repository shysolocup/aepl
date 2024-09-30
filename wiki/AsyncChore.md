Async Chores are async functions made from strings.<br>
These can be beneficial to know for some occasions
```js
const Class = require('aepl');


// creates a new class named Example
new Class("Example", class {
    constructor() {
        this.data = [1, 2, 3];
    }

    sleep(time) { 
        return new Promise(resolve => setTimeout(resolve, time*1000));
    }
});


// creates a new chore named add using a string with function data
new Example.AsyncChore("add", "number", `
    console.log(this.data); // [1, 2, 3]

    await this.sleep(3); // waits for 3 seconds

    this.data.push(number);
    console.log(this.data); // [1, 2, 3, 4]
`);


// creates a new instance of the class
let example = new Example();

(async () => {
    await example.add(4);
})();
```

<br>

> ## Class.AsyncChore
> description: creates a new async chore <br>
> calls:
> - AsyncChore/asyncChore
> - AChore/aChore
>
> parameters:
> - name `String`: name of the async chore
> - ...?parameters `String`: parameters for the async chore
> - value `String`: what the async chore does
>
> <br>
> 
> note: too lazy to add any example for this you get it