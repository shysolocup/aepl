module.exports = 

    
(c) => ({
        
        data: function AeplAddAsyncFunction(/**/) {
            const { data } = require('../classes/AeplAsyncFunction.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addAsyncFunction", "addAsyncFunc" ]
        
});
