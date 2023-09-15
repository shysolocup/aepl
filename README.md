# napl
<a href="https://www.npmjs.com/package/napl"><img src="https://img.shields.io/npm/v/napl?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/napl"><img src="https://img.shields.io/npm/dt/napl?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://github.com/paigeroid/napl/wiki"><img src="https://img.shields.io/badge/docs-tapel?color=blue&logo=gitbook&logoColor=white" alt="docs" /></a>
<img src="https://github.com/paigeroid/napl/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

napl is a Node.JS multi-layered class builder with built-in parent systems as well as better function and property makers for easier development and modding support inspired by Roblox's parent system
  - Open source
  - Lightweight
  - Easy to use
  - Compact

<br><br>

```console
npm i napl
```
```console
npm i paigeroid/napl
```

<br><br>

### Basic Use
```js
const { Class } = require('napl');


// creates a new class named Lobby
new Class("Lobby", class {
    constructor() {
	this.players = [];
        this.id = "id here";
    }
});


// creates a new class for lobbies named Player
new Lobby.Class("Player", class {
    constructor(data) {
        this.parent.players.push(data);
    }
});


// creates a new property for players named lobbyId
new Player.Property("lobbyId", function() {
    return this.parent.id;
});


// creates a new lobby
let lobby = new Lobby();


// creates new players
let player = new lobby.Player("a");
new lobby.Player("b");


console.log(player.lobbyId); // "id here"
console.log(lobby.players); // ["a", "b"]
```

<br><br>

### Parts
- Function: creates a new function for the class
- AsyncFunction: creates a new async function for the class
- Property: creates a new property for the class
- Chore: creates a new chore for the class
- AsyncChore: creates a new async chore for the class
- Class: creates a new class inside of the class
