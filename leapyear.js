// snippet: slighlty more complex conditionals

function isLeap(year) {
	/* Leap Years are any year that can be exactly divided by 4 (such as 2020, 2024, 2028, etc)
 	not	except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
 	 	yes	except if it can be exactly divided by 400, then it is (such as 2000, 2400) */

	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return "Leap year.";
			} else {
				return "Not a leap year.";
			}
		} else {
			return "Leap year.";
		}
	} else {
		return "Not a leap year";
	}
}
isLeap(1969);
