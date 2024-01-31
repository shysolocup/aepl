const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

module.exports = 

    
(c) => ({
        
        data: class AeplPreAsyncChore {
		    constructor(/**/) {
		        let args = Array.from(arguments);
		        let name = args.shift();
		        let string = args.pop();
		        
		        let stuff =  new AsyncFunction( ...args, string )
			    Object.defineProperty(stuff, "name", { value: name });
				Object.defineProperty(stuff, "parent", { value: c });
		        Object.defineProperty(c, name, {
	                    value: stuff
	                });
		
		        return stuff;
		    }
		},

        
        refs: [ "PreAsyncChore", "preAsyncChore", "preAChore", "PreAChore" ],
        
});
