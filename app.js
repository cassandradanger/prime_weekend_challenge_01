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


/*function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma
}

document.getElementId('addMonster').addEventListener('click', )
console.log(document.getElementById('name').value);

var player = new Monster(document.getElementById('name').value, document.getElementById('strength').value, 
	document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value,
	 document.getElementById('intelligence').value, document.getElementById('charisma').value );


var storageArray = [];
*/

console.log("Yes");

document.getElementById("submitButton").addEventListener("click", myFunction);

function myFunction(event){
	event.preventDefault();
	console.log("I am here!")
	var nameInput = document.getElementById("nameInput").value;
	var strengthInput = document.getElementById("strengthInput").value;
	var dexterityInput = document.getElementById("dexterityInput").value;
	var constitutionInput = document.getElementById("constitutionInput").value;
	var wisdomInput = document.getElementById("wisdomInput").value;
	var intelInput = document.getElementById("intelInput").value;
	var charismaInput = document.getElementById("charismaInput").value;


	document.getElementById("one").innerHTML = nameInput;
	document.getElementById("two").innerHTML = strengthInput;
	document.getElementById("three").innerHTML = dexterityInput;
	document.getElementById("four").innerHTML = constitutionInput;
	document.getElementById("five").innerHTML = wisdomInput;
	document.getElementById("six").innerHTML = intelInput;
	document.getElementById("seven").innerHTML = charismaInput;

	var text = "";
	//var i;
	/*for (i = 0; i < x.length; i++){
		text += x.elements[i].value + "<br>"; 
		}
		document.getElementById("demo").innerHTML = text;
	}*/

}






































