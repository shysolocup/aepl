# aepl
<a href="https://www.npmjs.com/package/aepl"><img src="https://img.shields.io/npm/v/aepl?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/aepl"><img src="https://img.shields.io/npm/dt/aepl?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://github.com/paigeroid/aepl/wiki"><img src="https://img.shields.io/badge/docs-tapel?color=blue&logo=gitbook&logoColor=white" alt="docs" /></a>
<img src="https://github.com/paigeroid/aepl/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

aepl is a Node.JS multi-layered class package with built-in parenting systems that let you get info from classes above as well as better function and property makers for easier to read and understand development and modding support inspired by Roblox's parent system.
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

### Basic Use
```js
const { Class } = require('aepl');



// main class
new Class("Main", class {
	constructor() {
		this.data = [1, 2, 3];
		this.layers = [];
	}
});



// sub classes
new Main.Class("Layer", class {
	constructor() {
		this.subs = [];
		this.data = [4, 5, 6];
		this.parent.layers.push(this);
	}
});


new Layer.Class("Sub", class {
	constructor() {
		this.data = [7, 8, 9]
	}
});



// properties
new Layer.Property("main", function() {
	return this.parent;
});


new Sub.Property("layer", function() {
	return this.parent;
});


new Sub.Property("main", function() {
	return this.parent.parent;
});



// stuff
let main = new Main();

console.log(this.main); // Main { layers: [], data: [1, 2, 3] }


let layer = new main.Layer();


console.log(layer); // Layer { subs: [], data: [4, 5, 6] }
console.log(layer.main); // Main { layers: [ [Layer] ], data: [1, 2, 3] }


let sub = new layer.Sub();


console.log(sub); // Sub { data: [7, 8, 9] }
console.log(sub.layer); // Layer { subs: [ [Sub] ], data: [4, 5, 6] }
console.log(sub.main); // Main { layers: [ [Layer] ], data: [1, 2, 3] }

```

<br><br>

### Classes
- Function: creates a new function for the class
- AsyncFunction: creates a new async function for the class
- Property: creates a new property for the class
- Chore: creates a new chore for the class
- AsyncChore: creates a new async chore for the class
- Class: creates a new class inside of the class
