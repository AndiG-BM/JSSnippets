// snippet: playing with Math (not a fan of BMI index!)

function bmiCalculator(weight, height) {
	var calcBMI = Math.round(weight / Math.pow(height, 2));

	if (calcBMI < 18.5) {
		alert("Your BMI is " + calcBMI + ", so you are underweight");
	}
	if (calcBMI > 18.5 && calcBMI < 24.9) {
		alert("Your BMI is " + calcBMI + ", so you are in normal range");
	} else {
		alert("Your BMI is " + calcBMI + ", so you are overweight");
	}

	return Math.round(calcBMI);
}
var calcBMI = bmiCalculator(67, 1.57);
console.log("BMI calc is: " + calcBMI);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
