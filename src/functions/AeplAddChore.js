module.exports = 

    
(c) => ({
        
        data: function AeplAddChore(/**/) {
            const { data } = require('../classes/AeplChore.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addChore", "addCh",
                "setChore", "setCh",
                "newChore", "newCh" ]
        
});
