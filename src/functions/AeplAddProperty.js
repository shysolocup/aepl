module.exports = 

    
(c) => ({
        
        data: function AeplAddProperty(/**/) {
            const { data } = require('../classes/AeplProperty.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addProperty", "addProp", "addP", 
                "setProperty", "setProp", "setP",
                "newProperty", "newProp", "newP" ]
        
});
