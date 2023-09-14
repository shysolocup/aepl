module.exports = 

    
(c) => ({
        
        data: class TapelFunction {
            constructor(name, func) {
                let stuff = (func instanceof Function) ? func : function() { return func; }
        
                Object.defineProperty(stuff, "name", { value: name });
                Object.defineProperty( c.prototype, name, { value: stuff });
        
                return stuff;
            }
        },

        
        refs: [ "Function", "function", "Func", "func" ]
        
})
