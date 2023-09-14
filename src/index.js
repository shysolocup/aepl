class Class {
    constructor(name, c) {
        Object.defineProperty(c, "name", { value: name });
    	c = ClassBuilder(c);
    	
        return c;
    }
}


function ClassBuilder(c) {
	
	// Function Maker
	class TapelFunctionMaker {
    	constructor(name, func) {
	        let stuff = (func instanceof Function) ? func : function() { return func; }
	
	        Object.defineProperty(stuff, "name", { value: name });
	        Object.defineProperty( c.prototype, name, { value: stuff });
	
	        return stuff;
	    }
	}
	
	
	// Async Function Maker
	class TapelAsyncFunctionMaker {
    	constructor(name, func) {
	        let stuff = (func instanceof Function) ? func : async function() { return func; }
	
	        Object.defineProperty(stuff, "name", { value: name });
	        Object.defineProperty( c.prototype, name, { value: stuff });
	
	        return stuff;
	    }
	}
	
	
	// Chore Maker
	class TapelChoreMaker {
    	constructor(/**/) {
    	    let args = Array.from(arguments);
    	    let name = args.shift();
    	    let string = args.pop();
    	    
    	    let stuff =  new Function( ...args, string )
    	    
	        Object.defineProperty( c.prototype, name, { value: stuff });
	        
	        console.log(name, args, stuff);
	
	        return stuff;
	    }
	}

	
	// Property Maker
	class TapelPropertyMaker {
	    constructor(name, value, attributes={set:undefined, enumerable:false, configurable:false}) {
	        let func = (value instanceof Function) ? value : function() { return value; };
	        
	        Object.defineProperty(func, "name", { value: name });
	        Object.defineProperty(c.prototype, name, {
	            get: func,
	            set: attributes.set,
	            enumerable: attributes.enumerable,
	            configurable: attributes.configurable
	        });
	
	        return func;
	    }
	}


	// Class Maker
	class TapelClassMaker {
	    constructor(name, value) {
	        let cl = ClassBuilder(
				(value instanceof Function) ? value : class { constructor() { return value; } } 
			);

	        Object.defineProperty(cl, "name", { value: name });
	        Object.defineProperty(c.prototype, name, { 
				get() {
					cl.prototype.parent = this;
					return cl;
				}
			});
	
	        return cl;
	    }
	}


	Object.defineProperties(c, {
	    "Function": { value: TapelFunctionMaker }, "function": { value: TapelFunctionMaker },
	    "Func": { value: TapelFunctionMaker }, "func": { value: TapelFunctionMaker},
	    
	    "Property": { value: TapelPropertyMaker }, "property": { value: TapelPropertyMaker },
	    "Prop": { value: TapelPropertyMaker }, "prop": { value: TapelPropertyMaker },
	    
	    "Class": { value: TapelClassMaker }, "class": { value: TapelClassMaker },
	    
	    "Chore": { value: TapelChoreMaker }, "chore": { value: TapelChoreMaker }
	});

	
	return c;
}

let Test = new Class("Test", class {
    constructor() {
        return this;
    }
});

new Test.Chore("test", "a", `console.log(a);`);

let c = new Test();

c.test("a");
