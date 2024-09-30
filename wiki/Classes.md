Class is the export from aepl and it's used to make new aepl classes<br>
When new classes are created it automatically defines it for you unless you tell it not to
```js
const Class = require('aepl');


// creates a new class named Main
new Class("Main", class {
    constructor() {
        this.data = [ 1, 2, 3 ];
    }
});


// creates a new instance of the Main class
let main = new Main();


console.log(main.data); // [ 1, 2, 3 ]
```

<br>

> ## Class
> description: creates a new aepl class<br>
> parameters:
> - name `String`: name of the class
> - class `Class`: class to create using
> - ?autodefine `Boolean`: if the class should automatically define or not
> ```js
> new Class("Example1", class { /* class info */ });
> let Example2 = new Class("Example2", class { /* class info */ }, false);
>
> let ex1 = new Example1();
> let ex2 = new Example2(); 
> ```
