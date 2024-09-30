addPreClass(), addPreClass() and addSub() adds a new subclass inside of the class itself instead of the prototype so you can use it outside of an instance
```js
const Class = require('aepl');


new Class("Main", class {
    constructor() {
        this.data = [1, 2, 3];
    }
});


Main.addPreSub("Layer0", class { /* class info */ });
Main.addPreClass("Layer1", class { /* class info */ });
Main.addPreSubClass("Layer2", class { /* class info */ });


console.log(Main.Layer0); // AeplPreClass
```

<br>

> ## Class.addPreClass()
> description: adds a new subclass inside of the class itself instead of the prototype so you can use it outside of an instance<br>
> calls:
> - addPreClass()
> - addPreSubClass()/addPreSubclass()
> - addPreSub()
> - setPreClass()
> - setPreSubClass()/setPreSubclass()
> - setPreSub()
> - newPreClass()
> - newPreSubClass()/newPreSubclass()
> - newPreSub()
> - addPC()
> - addPSC()
> - addPS()
> - setPC()
> - setPSC()
> - setPS()
> - newPC()
> - newPSC()
> - newPS()