const builder = require('../builder');


module.exports = 


(c) => ({
        
        data: class TapelClass {
		    constructor(name, value) {
		        let cl = builder(
			    	(value instanceof Function) ? value : class { constructor() { return value; } } 
			    );
		
		        Object.defineProperty(cl, "name", { value: name });
		        Object.defineProperty(c.prototype, name, { 
					get() {
						cl.prototype.parent = this;
						return cl;
					}
				});
					
				return new Function("cl", `return ${name} = cl`)(cl);
			}
		},

        
        refs: [ "Class", "class" ]
        
});
