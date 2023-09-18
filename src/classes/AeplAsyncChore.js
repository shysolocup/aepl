const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

module.exports = 

    
(c) => ({
        
        data: class AeplAsyncChore {
		    constructor(/**/) {
		        let args = Array.from(arguments);
		        let name = args.shift();
		        let string = args.pop();
		        
		        let stuff =  new AsyncFunction( ...args, string )
		        
		        Object.defineProperty( c.prototype, name, { value: stuff });
		
		        return stuff;
		    }
		},

        
        refs: [ "AsyncChore", "asyncChore" ],
        
});
