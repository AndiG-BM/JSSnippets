// snippet: text case

var name = prompt("Hello, what is you name: ");
var firstChar = name.slice(0, 1).toUpperCase();
var restChar = name.slice(1, name.length).toLowerCase();
alert("Hiya " + firstChar + restChar);
