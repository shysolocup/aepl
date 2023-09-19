module.exports = 

    
(c) => ({
        
        data: class AeplProperty {
		    constructor(name, value, attributes={set:undefined, enumerable:false, configurable:false}) {
		        let func = (value instanceof Function) ? value : function() { return value; };
		        
		        Object.defineProperty(func, "name", { value: name });
		        Object.defineProperty(c.prototype, name, {
		            get: func,
		            set: attributes.set,
		            enumerable: (attributes.enumerable) ? attributes.enumerable : true,
		            configurable: (attributes.configurable) ? attributes.configurable : true
		        });
		
		        return func;
		    }
		},

        
        refs: [ "Property", "property", "Prop", "prop" ]
        
});
