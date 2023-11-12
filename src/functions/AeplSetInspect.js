const util = require('util');
module.exports = 

    
(c) => ({
    
        data: function AeplSetInspect(func) {
            c.prototype[util.inspect.custom] = func;
            return func;
        },

    
        refs: [ "setInspect", "setI" ]
        
});
