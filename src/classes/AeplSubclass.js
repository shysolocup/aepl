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
						var parent = this;

						Object.defineProperty(cl.prototype, "parent", {
							get() { return parent },
							set(value) { return parent = value }
						});
						return cl;
					}
				});
					
				return new Function("cl", `return ${name} = cl`)(cl);
			}
		},

        
        refs: [ "Class", "class", "Subclass", "SubClass", "subclass", "Sub", "sub" ]
        
});
