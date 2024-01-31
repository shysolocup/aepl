module.exports = 

    
(c) => ({
        
        data: function AeplAddPreChore(...args) {
            const { data } = require('../classes/AeplPreChore.js')(c);
            return new data(...args);
        },

        
        refs: [ "addPreChore", "addPCh",
                "setPreChore", "setPCh",
                "newPreChore", "newPCh" ]
        
});
