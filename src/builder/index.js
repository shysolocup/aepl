const fs = require('fs');


function ClassBuilder(c) {
    let files = fs.readdirSync(`node_modules/tapel/src/classes`).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
	
    files.forEach( (file) => {
        let { refs, data } = require(`../classes/${file}`)(c);

        refs.forEach( (ref) => {
            Object.defineProperty(c, ref, { value: data });
        })
    });

    
	return c;
}


module.exports = ClassBuilder;
