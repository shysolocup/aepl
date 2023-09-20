module.exports = 

    
(c) => ({
        
        data: function AeplAddAsyncChore(/**/) {
            const { data } = require('../classes/AeplAsyncChore.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addAsyncChore", "addAChore", 
                "setAsyncChore", "setAChore",
                "newAsyncChore", "newAChore" ]
        
});
