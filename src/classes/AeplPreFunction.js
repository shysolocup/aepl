module.exports = 

    
(c) => ({
        
        data: class AeplPreFunction {
            constructor(name, func) {
                let stuff = (func instanceof Function) ? func : function() { return func; }
        
                Object.defineProperty(stuff, "name", { value: name, configurable: true });
				Object.defineProperty(stuff, "parent", { value: c, configurable: true });
                Object.defineProperty(c, name, {
                    value: stuff,
					configurable: true
                });
        
                return stuff;
            }
        },

        
        refs: [ "PreFunction", "preFunction", "PreFunc", "preFunc" ]
        
});
