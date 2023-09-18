module.exports = 

    
(c) => ({
        
        data: function AeplAddFunction(name, func) {
                const { data } = require('../classes/AeplFunction.js')(c);
                return new data(name, func);
            }
        },

        
        refs: [ "addFunction", "addFunc", "createFunction", "createFunc" ]
        
});
