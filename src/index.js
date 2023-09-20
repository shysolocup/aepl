const { builder } = require('./builder');


class Class {
    constructor(name, c, autodefine=true) {
        Object.defineProperty(c, "name", { value: name });
    	c = builder(c);
    	
       	if (autodefine) return new Function("c", `return ${name} = c`)(c);
        else return c;
    }
}
Class = builder(Class);


Object.defineProperty(Class, "new", {
    get() { return new Class(...Array.from(arguments)); }
});


module.exports = Class
