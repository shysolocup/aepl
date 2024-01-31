module.exports = 

    
(c) => ({
        
        data: class AeplPreFunction {
            constructor(name, func) {
                let stuff = (func instanceof Function) ? func : function() { return func; }
        
                Object.defineProperty(stuff, "name", { value: name });
				Object.defineProperty(stuff, "parent", { value: c });
                Object.defineProperty(c, name, {
                    value: stuff
                });
        
                return stuff;
            }
        },

        
        refs: [ "PreFunction", "preFunction", "PreFunc", "preFunc" ]
        
});
