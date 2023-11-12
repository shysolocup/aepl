module.exports = 

    
(c) => ({
        
        data: function AeplAddPreProperty(/**/) {
            const { data } = require('../classes/AeplPreProperty.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addPreProperty", "addPreProp", "addPP", 
                "setPreProperty", "setPreProp", "setPP",
                "newPreProperty", "newPreProp", "newPP" ]
        
});
