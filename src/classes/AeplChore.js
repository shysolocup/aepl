module.exports = 

    
(c) => ({
        
        data: class AeplChore {
		    constructor(/**/) {
		        let args = Array.from(arguments);
		        let name = args.shift();
		        let string = args.pop();
		        
		        let stuff =  new Function( ...args, string )
				Object.defineProperty(stuff, "name", { value: name });
				Object.defineProperty(stuff, "parent", { value: c });
		        
		        Object.defineProperty(c.prototype, name, {
	                    value: stuff
	                });
		
		        return stuff;
		    }
		},

        
        refs: [ "Chore", "chore" ]
        
});
