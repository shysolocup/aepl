const { builder } = require('./builder');


class Class {
    constructor(name, c, autodefine=true) {
        let cl = (c instanceof Function) ? c : (c == undefined) ? class {} : class { constructor() { return c; }};


        if (cl instanceof Function) Object.defineProperty(cl, "name", { value: name });
    	cl = builder(cl);
    	
        
       	if (autodefine) return new Function("cl", `return ${name} = cl`)(cl);
        else return cl;
    }
}

Class = builder(Class);



Object.defineProperties(Class, {
    init: {
        get() {
            return function AeplClassInit(/**/) {
                return new this(...Array.from(arguments));
            }
        }
    },

    
    from: {
        get() {
            return function AeplClassFrom(/**/) {
                let args = Array.from(arguments);
                let cl = args.shift();
                
                return new this( (cl.name) ? cl.name : "Unnamed", cl, ...args);
            }
        }
    }
});


module.exports = Class
