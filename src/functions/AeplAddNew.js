const fs = require('fs');
const class_dir = require('../classes/funky_dir');


module.exports = 

    
(c) => ({
        
        data: function AeplAddNew(/**/) {
            let classes = fs.readdirSync(class_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
            
            let args = Array.from(arguments);
            let type = args.shift();

            let thing;
            let rl = [];

            classes.forEach( (file) => {
                let { refs, data } = require(`../classes/${file}`)(c);

                refs.forEach( (ref) => {
                    rl.push(ref);
                    
                    if (ref == type) thing = data;
                });
            });

            if (!rl.includes(type)) {
                let { data } = require('../classes/AeplProperty.js')(c);
                args.unshift(type);
                thing = data;
            }

            return new thing(...args);
        },

        
        refs: [ "addNew", "new" ]
        
});
