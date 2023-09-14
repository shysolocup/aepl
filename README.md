# tapel
<a href="https://www.npmjs.com/package/tapel"><img src="https://img.shields.io/npm/v/tapel?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/tapel"><img src="https://img.shields.io/npm/dt/tapel?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<img src="https://github.com/paigeroid/tapel/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

tapel is a Node.JS multi-layered class builder with built-in parent systems as well as better function and property makers for easier development and modding support inspired by Roblox's parent system
  - Fully open source
  - Lightweight
  - Easy to use
  - Compact

<br><br>

```console
npm i tapel
```
```console
npm i paigeroid/tapel
```

<br><br>

### Basic Use
```js
const { Class } = require('tapel');


// creates a new class called Layer
new Class("Layer", class {
    constructor() {
        this.data = [];
    }
});


// creates a class called Data for the Layer class
new Layer.Class("Data", class {
    constructor(data) {
        this.parent.data.push(data);
    }
});


// creates a new layer
let layer = new Layer();


// adds "a" and "b" to the layer's data
new layer.Data("a");
new layer.Data("b");


console.log(layer.data); // ["a", "b"]
```
