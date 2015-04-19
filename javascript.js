/*
Add a reference to this file in index.html.
Create an object called Monster that has the properties name, strength, dexterity, constitution, wisdom, intelligence, and charisma.
Create an object called Player that inherits from Monster, and has the additional property playerClass.
Create a constructor for Player as well as a prototype to correctly pass reference to this.
Create an empty array to serve as storage.
Next, write an function that will act as a click handler for the button. It should call the appropriate constructor using the values the user typed into the textboxes, add the object to the array, append it to the table for visual representation, and clear out the textboxes. Hint: Use document.getElementById('addMonster').addEventListener('click', <functionNameGoesHere>);
*/

var monster = {
  name: 1,
  strength: 2,
  dexterity: 3,
  constitution: 4,
  wisdom: 5,
  intelligence: 6,
  charisma: 7,
}

		console.log(monster);

var player = Object.create(monster);

player.playerClass = "What?";

		console.log(player);

function player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
	this.name = name,
	this.strength = strength,
	this.dexterity = dexterity,
	this.constitution = constitution,
	this.wisdom = wisdom,
	this.intelligence = intelligence,
	this.charisma = charisma,
	this.playerClass = playerClass
}

var player1 = new player("John", "so many strength", "total", "fainter", "none", "none", 100, 2);

console.log(player1);








































storageArray = [];

