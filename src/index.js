const builder = require('./builder');


class Class {
    constructor(name, c) {
        Object.defineProperty(c, "name", { value: name });
    	c = builder(c);
    	
       	return new Function("c", `return ${name} = c`)(c);
    }
}
Class = builder(Class);


module.exports = { Class, builder };
