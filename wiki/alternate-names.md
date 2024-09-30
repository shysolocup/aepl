```js
const cl = require('aepl');


class Template {
    constructor() {
        this.data = [1, 2, 3];
    }
}


cl.from(Template);
Template.setName("Main");


Main.newProp("test", function() {
    return this.data.reverse();
});


let main = new Main();


console.log(main); // Template { data: [1, 2, 3] }
console.log(main.test); // [3, 2, 1]
```