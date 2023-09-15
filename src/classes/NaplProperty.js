module.exports = 

    
(c) => ({
        
        data: class NaplProperty {
		    constructor(name, value, attributes={set:undefined, enumerable:false, configurable:false}) {
		        let func = (value instanceof Function) ? value : function() { return value; };
		        
		        Object.defineProperty(func, "name", { value: name });
		        Object.defineProperty(c.prototype, name, {
		            get: func,
		            set: attributes.set,
		            enumerable: attributes.enumerable,
		            configurable: attributes.configurable
		        });
		
		        return func;
		    }
		},

        
        refs: [ "Property", "property", "Prop", "prop" ]
        
});
