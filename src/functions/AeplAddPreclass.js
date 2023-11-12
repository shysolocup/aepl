module.exports = 

    
(c) => ({
        
        data: function AeplAddPreclass(/**/) {
            const { data } = require('../classes/AeplPreclass.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addPreClass", "addPreSubClass", "addPreSubclass", "addPreSub", "addPC", "addPSC", "addPS",
                "setPreClass", "setPreSubClass", "setPreSubclass", "setPreSub", "setPC", "setPSC", "setPS",
                "newPreClass", "newPreSubClass", "newPreSubclass", "newPreSub", "newPC", "newPSC", "newPS" ]
        
});
