module.exports = 

    
(c) => ({
        
        data: function AeplAddSubClass(/**/) {
            const { data } = require('../classes/AeplSubClass.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addClass", "addSubClass", "addSubclass", "addSub", 
                "setClass", "setSubClass", "setSubclass", "setSub",
                "newClass", "newSubClass", "newSubclass", "newSub" ]
        
});
