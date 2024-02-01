const util = require('util');
module.exports = 

    
(c) => ({
    
        data: function AeplExtend(cl, ...args) {
            let ext = new cl(...args);
            Object.assign(this, ext);
            util.inherits(c, cl);
            return this;
        },

    
        refs: [ "extend", "ext" ]
        
});
