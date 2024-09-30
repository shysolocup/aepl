NOTE: this example uses [stews](https://github.com/paigeroid/stews)

<br>


```js
const Class = require('aepl');
const { Soup } = require('stews');



// creates the main class
new Class("Main", class {
    constructor() {
        this.events = new Soup(Object);
    }

    on(name, func) {
        this.events.get(name).listen(func);
        return func;
    }

    off(name, func) {
        this.events.get(name).listeners.remove(func);
    }
});



// creates the event subclass
Main.new("subclass", "Event", class {
    constructor(name) {
        this.name = name;
        this.listeners = new Soup();
        this.parent.events.push(name, this);
    }

    listen(func) {
        this.listeners.push(func);
    }

    fire() {
        this.listeners.forEach( (f) => {
            f(...Array.from(arguments));
        });
    }
});



// example
let main = new Main();
let event = new main.Event("test");


let f = main.on("test", function(a, b) {
    console.log(a, b);
});


event.fire("a", "b"); // a b

main.off("test", f); // removes the listener

event.fire("a", "b"); // doesn't log anything
```