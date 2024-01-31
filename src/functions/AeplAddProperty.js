module.exports = 

    
(c) => ({
        
        data: function AeplAddProperty(...args) {
            const { data } = require('../classes/AeplProperty.js')(c);
            return new data(...args);
        },

        
        refs: [ "addProperty", "addProp", "addP", 
                "setProperty", "setProp", "setP",
                "newProperty", "newProp", "newP" ]
        
});
