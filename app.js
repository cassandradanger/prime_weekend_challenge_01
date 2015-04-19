/*
Add a reference to this file in index.html.
Create an object called Monster that has the properties name, strength, dexterity, constitution, wisdom, intelligence, and charisma.
Create an object called Player that inherits from Monster, and has the additional property playerClass.
Create a constructor for Player as well as a prototype to correctly pass reference to this.
Create an empty array to serve as storage.

Next, write an function that will act as a click handler for the button. 
It should call the appropriate constructor using the values the user typed into the textboxes, 
add the object to the array, append it to the table for visual representation, and clear out the textboxes. 
Hint: Use document.getElementById('addMonster').addEventListener('click', <functionNameGoesHere>);
*/

/*var monster = {
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
*/


function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
	this.name = document.getElementById('name');
	this.strength = document.getElementById('strength');
	this.dexterity = document.getElementById('dexterity');
	this.constitution = document.getElementById('constitution');
	this.wisdom = document.getElementById('wisdom');
	this.intelligence = document.getElementById('intelligence');
	this.charisma = document.getElementById('charisma')
}


console.log(Monster.name);

storageArray = [];

