module.exports = 

    
(c) => ({
        
        data: function AeplAddPreFunction(/**/) {
            const { data } = require('../classes/AeplPreFunction.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addPreFunction", "addPreFunc", "addPF",
                "setPreFunction", "setPreFunc", "setPF",
                "newPreFunction", "newPreFunc", "newPF" ]
        
});
