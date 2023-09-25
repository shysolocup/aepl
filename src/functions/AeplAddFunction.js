module.exports = 

    
(c) => ({
        
        data: function AeplAddFunction(/**/) {
            const { data } = require('../classes/AeplFunction.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addFunction", "addFunc", "addF",
                "setFunction", "setFunc", "setF",
                "newFunction", "newFunc", "newF" ]
        
});
