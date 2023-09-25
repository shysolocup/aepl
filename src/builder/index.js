const fs = require('fs');
let exp = {};


function ClassBuilder(c) {
	if (c == undefined) c = class {};
    if (!(c instanceof Function)) {
        let val = c;

        c = class {
            constructor() {
                return new Proxy(val, {

                    get(target, prop) {
                        if (Object.getOwnPropertyNames(c.prototype).includes(prop)) {
                            return c.prototype[prop];
                        }
                        else {
                            return target[prop];
                        }
                    }

                });
            }
        }
    }
	
	let class_dir = require('../classes/funky_dir');
	let func_dir = require('../functions/funky_dir');
	
    let classes = fs.readdirSync(class_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
	let functions = fs.readdirSync(func_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

	
	
	// adds classes
    classes.forEach( (file) => {
        let { refs, data } = require(`../classes/${file}`)(c);

        refs.forEach( (ref) => {
            Object.defineProperty(c, ref, { value: data });
			Object.defineProperty(c.prototype, ref, { value: data });
        });
    });


	
	// adds functions
	functions.forEach( (file) => {
        let { refs, data } = require(`../functions/${file}`)(c);

        refs.forEach( (ref) => {
            Object.defineProperty(c, ref, { value: data });
			Object.defineProperty(c.prototype, ref, { value: data });
        });
    });

	
	
	return c;
}


exp.builder = ClassBuilder;
module.exports = exp;
