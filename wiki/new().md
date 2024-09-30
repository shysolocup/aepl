new() and addNew() can be used to add different things more easily
```js
const Class = require('aepl');
const { Soup } = require('stews');

new Class("Main", class {
    this.data = new Soup([1, 2, 3]);
});

Main.new("prop", "reversed", function() {
    return this.data.reverse();
});

Main.addNew("func", "shuffle", function() {
    return this.data.shuffle();
});

let main = new Main();

console.log(main.reversed); // [3, 2, 1]
```

<br>

> ## Class.new()
> description: adds a new thing<br>
> calls:
> - new()
> - addNew()
