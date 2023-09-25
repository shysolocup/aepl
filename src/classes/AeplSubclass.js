const { builder } = require('../builder');


module.exports = 


(c) => ({
        
        data: class AeplSubclass {
		    constructor(name, value) {
		        let cl = builder(
			    	(value instanceof Function) ? value : (value == undefined) ? class {} : value
			    );
		
		        if (cl instanceof Function) Object.defineProperty(cl, "name", { value: name });
		        Object.defineProperty(c.prototype, name, { 
					get() {
						cl.prototype.parent = this;
						return cl;
					}
				});
					
				return new Function("cl", `return ${name} = cl`)(cl);
			}
		},

        
        refs: [ "Class", "class", "Subclass", "SubClass", "subclass", "Sub", "sub" ]
        
});
