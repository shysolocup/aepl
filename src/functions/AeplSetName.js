module.exports = 

    
    
(c) => ({
    
        data: function AeplSetName(name) {
            Object.defineProperty(c, "name", { value: name });
            return new Function("cl", `return ${name} = cl`)(c);
        },

    
        refs: [ "setName", "setN" ]
        
});
