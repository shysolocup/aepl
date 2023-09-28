module.exports = 

    
    
(c) => ({
    
        data: function AeplSetName(name, autodefine=true) {
            Object.defineProperty(c, "name", { value: name });
            if (autodefine) return new Function("cl", `return ${name} = cl`)(c);
        },

    
        refs: [ "setName", "setN" ]
        
});
