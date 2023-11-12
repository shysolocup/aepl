module.exports = 

    
(c) => ({
        
        data: function AeplAddPreChore(/**/) {
            const { data } = require('../classes/AeplPreChore.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addPreChore", "addPCh",
                "setPreChore", "setPCh",
                "newPreChore", "newPCh" ]
        
});
