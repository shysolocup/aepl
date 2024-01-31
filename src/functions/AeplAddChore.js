module.exports = 

    
(c) => ({
        
        data: function AeplAddChore(...args) {
            const { data } = require('../classes/AeplChore.js')(c);
            return new data(...args);
        },

        
        refs: [ "addChore", "addCh",
                "setChore", "setCh",
                "newChore", "newCh" ]
        
});
