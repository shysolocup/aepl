module.exports = 

    
(c) => ({
        
        data: function AeplAddAsyncChore(...args) {
            const { data } = require('../classes/AeplAsyncChore.js')(c);
            return new data(...args);
        },

        
        refs: [ "addAsyncChore", "addAChore", "addACh",
                "setAsyncChore", "setAChore", "setACh",
                "newAsyncChore", "newAChore", "newACh" ]
        
});
