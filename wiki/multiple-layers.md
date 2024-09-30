```js
const Class = require('aepl');


// main class
new Class("Main", class {
	constructor() {
		this.data = [1, 2, 3];
		this.layers = [];
	}
});



// subclasses
Main.new("subclass", "Layer", class {
	constructor() {
		this.extras = [];
		this.data = [4, 5, 6];
		this.parent.layers.push(this);
	}
});


Layer.new("subclass", "Extra", class {
	constructor() {
		this.data = [7, 8, 9]
		this.parent.extras.push(this);
	}
});



// functions
Main.new("func", "reverse", function() {
    return this.data.reverse();
});


Layer.new("func", "reverse", function() {
    return this.data.reverse();
});


Extra.new("func", "reverse", function() {
    return this.data.reverse();
});



// properties
Layer.new("prop", "main", function() {
	return this.parent;
});


Extra.new("prop", "layer", function() {
	return this.parent;
});


Extra.new("prop", "main", function() {
	return this.parent.parent;
});



// examples
let main = new Main();


console.log(main); // Main { layers: [], data: [1, 2, 3] }


let layer = new main.Layer();


console.log(layer); // Layer { extras: [], data: [4, 5, 6] }
console.log(layer.main); // Main { layers: [ [Layer] ], data: [1, 2, 3] }


let extra = new layer.Extra();


console.log(extra); // Extra { data: [7, 8, 9] }
console.log(extra.layer); // Layer { extras: [ [Extra] ], data: [4, 5, 6] }
console.log(extra.main); // Main { layers: [ [Layer] ], data: [1, 2, 3] }


console.log(main.reverse()); // [3, 2, 1]
console.log(layer.reverse()); // [6, 5, 4]
console.log(extra.reverse()); // [9, 8, 7]
```