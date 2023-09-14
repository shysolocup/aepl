
(c) => {
  return class TapelFunction {
      constructor(name, func) {
            let stuff = (func instanceof Function) ? func : function() { return func; }
    
            Object.defineProperty(stuff, "name", { value: name });
            Object.defineProperty( c.prototype, name, { value: stuff });
    
            return stuff;
        }
}
	

// Async Function Maker
class TapelAsyncFunction {
    constructor(name, func) {
        let stuff = (func instanceof Function) ? func : async function() { return func; }

        Object.defineProperty(stuff, "name", { value: name });
        Object.defineProperty( c.prototype, name, { value: stuff });

        return stuff;
    }
}


// Chore Maker
class TapelChore {
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
class TapelProperty {
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
class TapelClass {
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
