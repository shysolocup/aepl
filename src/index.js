const { builder } = require('./builder');


class Class {
    constructor(name, c, autodefine=true) {
        let cl = (c instanceof Function) ? c : (c == undefined) ? class {} : c;


        if (cl instanceof Function) Object.defineProperty(cl, "name", { value: name });
    	cl = builder(cl);
    	
        
       	if (autodefine) return new Function("cl", `return ${name} = cl`)(cl);
        else return cl;
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
