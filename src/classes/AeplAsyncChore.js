const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

module.exports = 

    
(c) => ({
        
        data: class AeplAsyncChore {
		    constructor(/**/) {
		        let args = Array.from(arguments);
		        let name = args.shift();
		        let string = args.pop();
		        
		        let stuff =  new AsyncFunction( ...args, string )
				Object.defineProperty(stuff, "name", { value: name, configurable: true });
				Object.defineProperty(stuff, "parent", { value: c, configurable: true });
		        
		        Object.defineProperty(c.prototype, name, {
	                    value: stuff,
						configurable: true
	                });
		
		        return stuff;
		    }
		},

        
        refs: [ "AsyncChore", "asyncChore", "aChore", "AChore" ],
        
});
