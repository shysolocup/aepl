module.exports = 

    
(c) => ({
        
        data: class AeplPreChore {
		    constructor(/**/) {
		        let args = Array.from(arguments);
		        let name = args.shift();
		        let string = args.pop();
		        
		        let stuff =  new Function( ...args, string )
		        Object.defineProperty(stuff, "name", { value: name });
				Object.defineProperty(stuff, "parent", { value: c });
		        Object.defineProperty(c, name, {
	                    value: stuff
	                });
		
		        return stuff;
		    }
		},

        
        refs: [ "PreChore", "preChore" ]
        
});
