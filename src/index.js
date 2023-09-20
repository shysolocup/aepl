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


module.exports = { Class, builder };
