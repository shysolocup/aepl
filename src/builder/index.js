const fs = require('fs');
let exp = {};


function ClassBuilder(c) {
	if (c == undefined) c = class {};
	
	let classDir = require('../classes/dir');
	let funcDir = require('../functions/dir');
	
    let classes = fs.readdirSync(classDir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
	let functions = fs.readdirSync().filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

	
	
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
