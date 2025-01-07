// snippet: playing with simple arrays and math
var names = ["chez", "frank", "tula", "bazil", "polly", "david"];

function whosPaying() {
	var numberOfPeople = names.length;
	var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

	var randomPerson = names[randomPersonPosition];

	return randomPerson + " is going to buy lunch today!";
}
