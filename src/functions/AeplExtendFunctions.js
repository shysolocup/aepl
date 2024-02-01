const util = require('util');
module.exports = 

    
(c) => ({
    
        data: function AeplExtendProperties(cl, ...args) {
            let ext = new cl(...args);
            // Object.assign(this, ext);
            util.inherits(c, cl);
            return this;
        },

    
        refs: [ "extendFunctions", "extendFuncs", "extendF", "extFuncs", "extF" ]
        
});
