module.exports = 

    
(c) => ({
        
        data: class AeplChore {
		    constructor(/**/) {
		        let args = Array.from(arguments);
		        let name = args.shift();
		        let string = args.pop();
		        
		        let stuff =  new Function( ...args, string )
		        
		        c.prototype[name] = stuff
		
		        return stuff;
		    }
		},

        
        refs: [ "Chore", "chore" ]
        
});
