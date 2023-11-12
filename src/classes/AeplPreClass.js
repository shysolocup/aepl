const { builder } = require('../builder');


module.exports = 


(c) => ({
        
        data: class AeplPreClass {
		    constructor(name, value) {
		        let cl = builder(
			    	(value instanceof Function) ? value : (value == undefined) ? class {} : class { constructor() { return value }}
			    );
		
		        if (cl instanceof Function) Object.defineProperty(cl, "name", { value: name });
		        Object.defineProperty(c, name, { 
					get() {
						var parent = this;

						Object.defineProperty(cl.prototype, "parent", {
							get() { return parent },
							set(value) { return parent = value },
							configurable: true
						});
						return cl;
					}
				});
					
				return new Function("cl", `return ${name} = cl`)(cl);
			}
		},

        
        refs: [ "PreClass", "preClass", "PreSubclass", "preSubclass", "preSubClass", "PreSub", "preSub" ]
        
});
