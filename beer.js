// snippet: simple increment and decrement usage
var bottles = 1;

function beerBottles() {
	while (bottles <= 100) {
		var bottlesOn = bottles++;
		var bottlesGone = bottles--;

		return (
			"there are " +
			bottlesGone +
			" on the wall, take one down and pass it around, there are " +
			bottlesOn +
			" on the wall"
		);

		bottles++;
	}
}
