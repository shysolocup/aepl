# aepl 🍏
<a href="https://www.npmjs.com/package/aepl"><img src="https://img.shields.io/npm/v/aepl?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/aepl"><img src="https://img.shields.io/npm/dt/aepl?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://github.com/paigeroid/aepl/wiki"><img src="https://img.shields.io/badge/documentation-tapel?color=blue&logo=gitbook&logoColor=white" alt="docs" /></a>
<img src="https://github.com/paigeroid/aepl/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

aepl is a Node.JS multi-layered class creation package with built-in parenting systems that let you get info from classes above as well as better function and property makers for easier to read and understand development and modding support inspired by Roblox's Studio API.
  - Open source
  - Lightweight
  - Easy to use
  - Compact

<br><br>

```console
npm i aepl
```
```console
npm i paigeroid/aepl
```


<br><br>


### Uses
aepl makes classes layered meaning that you can have multiple classes inside of eachother and access upper layers using parents
```js
const Class = require('aepl');


// main class
new Class("Main", class {
	constructor() {
		this.data = [1, 2, 3];
	}
});


// creates a new subclass named layer
Main.new("subclass", "Layer", class {
	constructor() {
		this.data = [4, 5, 6];
	}
});


// creates a new instance of the main class
let main = new Main();


console.log(main.data); // [1, 2, 3]


// creates a new instance of the layer class
let layer = new main.Layer();


console.log(layer.data); // [4, 5, 6]
console.log(layer.parent.data); // [1, 2, 3]
```
<br>

it also adds methods for creating new functions and properties

<br>

```js
const Class = require('aepl');


// main class
new Class("Main", class {
	constructor() {
		this.data = [1, 2, 3];
	}
});


// creates a new function that reverses the data
Main.new("func", "reverse", function() {
	return this.data.reverse();
});


// creates a new subclass named layer
Main.new("subclass", "Layer", class {
	constructor() {
		this.data = [4, 5, 6];
	}
});


// creates a new property for layer named mainData that returns the data of the parent class
Layer.new("prop", "mainData", function() {
	return this.parent.data;
});


// creates a new function for layer that reverses its data
Layer.new("func", "reverse", function() {
	return this.data.reverse();
});


// creates a new instance of the main class
let main = new Main();


console.log(main.data); // [1, 2, 3]


// creates a new instance of the layer class
let layer = new main.Layer();


console.log(layer.data); // [4, 5, 6]
console.log(layer.mainData); // [1, 2, 3]


console.log(main.reverse()); // [3, 2, 1]
console.log(layer.reverse()); // [6, 5, 4]
```


<br><br>


### Advanced Example
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
