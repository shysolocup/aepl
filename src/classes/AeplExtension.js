const { builder } = require('../builder');


module.exports = 


(c) => ({
        
        data: class AeplExtension {
		    constructor(name, extending, value) {
		        let cl = builder(
			    	(value instanceof Function) ? value : (value == undefined) ? class {} : class { constructor() { return value }}
			    );
		
		        if (cl instanceof Function) Object.defineProperty(cl, "name", { value: name });
		        Object.defineProperty(c.prototype, name, { 
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

        
        refs: [ "Extension", "extension", "Ext", "ext", "Ex", "ex" ]
        
});
