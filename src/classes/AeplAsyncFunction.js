module.exports = 

    
(c) => ({
        
        data: class AeplAsyncFunction {
            constructor(name, func) {
                let stuff = (func instanceof Function) ? func : async function() { return func; }

                Object.defineProperty(stuff, "name", { value: name });
                Object.defineProperty( c.prototype, name, { value: stuff });

                return stuff;
            }
        },

        
        refs: [ "AsyncFunction", "asyncFunction", "AsyncFunc", "asyncFunc" ]
        
});
