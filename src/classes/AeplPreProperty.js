module.exports = 

    
(c) => ({
        
        data: class AeplPreProperty {
		    constructor(name, value, attributes={set:undefined, enumerable:false, configurable:false}) {
		        let func = (value instanceof Function) ? value : function() { return value; };
		        
		        Object.defineProperty(func, "name", { value: name });
				Object.defineProperty(func, "parent", { value: c });
		        Object.defineProperty(c, name, {
		            get: func,
		            set: attributes.set,
		            enumerable: (attributes.enumerable) ? attributes.enumerable : true,
		            configurable: (attributes.configurable) ? attributes.configurable : true
		        });
		
		        return func;
		    }
		},

        
        refs: [ "PreProperty", "preProperty", "PreProp", "preProp" ]
        
});
