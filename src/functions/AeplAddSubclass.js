module.exports = 

    
(c) => ({
        
        data: function AeplAddSubclass(...args) {
            const { data } = require('../classes/AeplSubclass.js')(c);
            return new data(...args);
        },

        
        refs: [ "addClass", "addSubClass", "addSubclass", "addSub", "addC", "addSC", "addS",
                "setClass", "setSubClass", "setSubclass", "setSub", "setC", "setSC", "setS",
                "newClass", "newSubClass", "newSubclass", "newSub", "newC", "newSC", "newS" ]
        
});
