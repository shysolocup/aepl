const { builder } = require('./builder');
const util = require('util');


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
            return function AeplClassInit(...args) {
                return new this(...args);
            }
        }
    },

    
    from: {
        get() {
            return function AeplClassFrom(...args) {
                let cl = args.shift();
                
                return new this( (cl.name) ? cl.name : "Unnamed", cl, ...args);
            }
        }
    },


    inspect: {
        value(c, settings={ colors: true } ) {
            return util.inspect(c, settings);
        }
    }
});


module.exports = Class
