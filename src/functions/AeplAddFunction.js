module.exports = 

    
(c) => ({
        
        data: function AeplAddFunction(...args) {
            const { data } = require('../classes/AeplFunction.js')(c);
            return new data(...args);
        },

        
        refs: [ "addFunction", "addFunc", "addF",
                "setFunction", "setFunc", "setF",
                "newFunction", "newFunc", "newF" ]
        
});
