module.exports = 

    
(c) => ({
        
        data: function AeplAddAsyncFunction(/**/) {
            const { data } = require('../classes/AeplAsyncFunction.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addAsyncFunction", "addAsyncFunc", "addAFunction", "addAFunc", "addAF", 
                "setAsyncFunction", "setAsyncFunc", "setAFunction", "setAFunc", "setAF",
                "newAsyncFunction", "newAsyncFunc", "newAFunction", "newAFunc", "newAF" ]
        
});
