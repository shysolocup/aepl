module.exports = 

    
(c) => ({
        
        data: function AeplAddPreFunction(...args) {
            const { data } = require('../classes/AeplPreFunction.js')(c);
            return new data(...args);
        },

        
        refs: [ "addPreFunction", "addPreFunc", "addPF",
                "setPreFunction", "setPreFunc", "setPF",
                "newPreFunction", "newPreFunc", "newPF" ]
        
});
