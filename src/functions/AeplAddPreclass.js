module.exports = 

    
(c) => ({
        
        data: function AeplAddPreclass(...args) {
            const { data } = require('../classes/AeplPreclass.js')(c);
            return new data(...args);
        },

        
        refs: [ "addPreClass", "addPreSubClass", "addPreSubclass", "addPreSub", "addPC", "addPSC", "addPS",
                "setPreClass", "setPreSubClass", "setPreSubclass", "setPreSub", "setPC", "setPSC", "setPS",
                "newPreClass", "newPreSubClass", "newPreSubclass", "newPreSub", "newPC", "newPSC", "newPS" ]
        
});
