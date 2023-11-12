module.exports = 

    
(c) => ({
        
        data: function AeplAddPreAsyncChore(/**/) {
            const { data } = require('../classes/AeplPreAsyncChore.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addPreAsyncChore", "addPreAChore", "addPACh",
                "setPreAsyncChore", "setAPreChore", "setPACh",
                "newPreAsyncChore", "newPreAChore", "newPACh" ]
        
});
