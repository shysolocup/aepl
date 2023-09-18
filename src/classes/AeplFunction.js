module.exports = 

    
(c) => ({
        
        data: class AeplFunction {
            constructor(name, func) {
                let stuff = (func instanceof Function) ? func : function() { return func; }
        
                Object.defineProperty(stuff, "name", { value: name });
                c.prototype[name] = stuff;
        
                return stuff;
            }
        },

        
        refs: [ "Function", "function", "Func", "func" ]
        
});
