module.exports = 

    
(c) => ({
        
        data: function AeplAddPreAsyncChore(...args) {
            const { data } = require('../classes/AeplPreAsyncChore.js')(c);
            return new data(...args);
        },

        
        refs: [ "addPreAsyncChore", "addPreAChore", "addPACh",
                "setPreAsyncChore", "setAPreChore", "setPACh",
                "newPreAsyncChore", "newPreAChore", "newPACh" ]
        
});
