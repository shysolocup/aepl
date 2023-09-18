module.exports = 

    
(c) => ({
        
        data: function AeplAddFunction(name, func) {
                let stuff = (func instanceof Function) ? func : function() { return func; }
        
                Object.defineProperty(stuff, "name", { value: name });
                Object.defineProperty( c.prototype, name, { value: stuff });
        
                return stuff;
            }
        },

        
        refs: [ "addFunction", "addFunc" ]
        
});
