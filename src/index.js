const { builder } = require('./builder');


class Class {
    constructor(name, c, autodefine=true) {
        if (c == undefined) c = class {};


        Object.defineProperty(c, "name", { value: name });
    	c = builder(c);
    	
        
       	if (autodefine) return new Function("c", `return ${name} = c`)(c);
        else return c;
    }
}

Class = builder(Class);


Object.defineProperty(Class, "init", {
    get() {
        return function ClassInit(/**/) {
            return new this(...Array.from(arguments));
        }
    }
});


module.exports = Class
