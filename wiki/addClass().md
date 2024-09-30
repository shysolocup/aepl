addClass(), addSubClass() and addSub() adds a new subclass
```js
const Class = require('aepl');


new Class("Main", class { /* class info */ });


Main.addSub("Layer0", class { /* class info */ });
Main.addClass("Layer1", class { /* class info */ });
Main.addSubClass("Layer2", class { /* class info */ });
```

<br>

> ## Class.addClass()
> description: adds a new subclass <br>
> calls:
> - addClass()
> - addSubClass()/addSubclass()
> - addSub()
> - setClass()
> - setSubClass()/setSubclass()
> - setSub()
> - newClass()
> - newSubClass()/newSubclass()
> - newSub()
> - addC()
> - addSC()
> - addS()
> - setC()
> - setSC()
> - setS()
> - newC()
> - newSC()
> - newS()