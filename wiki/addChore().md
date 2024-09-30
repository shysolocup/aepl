addChore() adds a new chore
```js
const Class = require('aepl');


new Class("Main", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


Main.addChore("reverse", `return this.data.reverse();`);

let main = new Main();

console.log(main.reverse()); // [3, 2, 1]
```

<br>

> ## Class.addChore()
> description: adds a new chore<br>
> calls:
> - addChore()
> - setChore()
> - newChore()
> - addCh()
> - setCh()
> - newCh()