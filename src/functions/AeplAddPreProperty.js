module.exports = 

    
(c) => ({
        
        data: function AeplAddPreProperty(...args) {
            const { data } = require('../classes/AeplPreProperty.js')(c);
            return new data(...args);
        },

        
        refs: [ "addPreProperty", "addPreProp", "addPP", 
                "setPreProperty", "setPreProp", "setPP",
                "newPreProperty", "newPreProp", "newPP" ]
        
});
