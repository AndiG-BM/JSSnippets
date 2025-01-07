// snippet: simple array
var guestList = ["Andrea", "Frank", "Poulo", "Ahmit", "Kaz", "Boz"];

var nameEntry = prompt("What is your name?");

if (guestList.includes(nameEntry)) {
	alert("yep you're on the list");
} else {
	alert("soz mate, off you go");
}
