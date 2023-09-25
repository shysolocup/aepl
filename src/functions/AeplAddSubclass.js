module.exports = 

    
(c) => ({
        
        data: function AeplAddSubclass(/**/) {
            const { data } = require('../classes/AeplSubclass.js')(c);
            return new data(...Array.from(arguments));
        },

        
        refs: [ "addClass", "addSubClass", "addSubclass", "addSub", "addC", "addSC", "addS",
                "setClass", "setSubClass", "setSubclass", "setSub", "setC", "setSC", "setS",
                "newClass", "newSubClass", "newSubclass", "newSub", "newC", "newSC", "newS" ]
        
});
