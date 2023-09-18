const fs = require('fs');
let exports = {};



function ClassBuilder(c) {
    let classes = fs.readdirSync(`node_modules/aepl/src/classes`).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
	let functions = fs.readdirSync(`node_modules/aepl/src/functions`).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

	
	// adds classes
    classes.forEach( (file) => {
        let { refs, data, name } = require(`../classes/${file}`)(c);

		exports[name] = data;

        refs.forEach( (ref) => {
            Object.defineProperty(c, ref, { value: data });
        });
    });

	
	// adds functions
	functions.forEach( (file) => {
        let { refs, data } = require(`../functions/${file}`)(c);

        refs.forEach( (ref) => {
            Object.defineProperty(c, ref, { value: data });
        });
    });

	
	return c;

}



exports.push(ClassBuilder);
module.exports = exports;
