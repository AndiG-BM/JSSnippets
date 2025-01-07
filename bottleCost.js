// snippet: playing with Math

var milkMoney = prompt("how much you got for milk?");
function getMilkNumber(milkMoney) {
	console.log("leaveHouse");
	console.log("enterStore");
	console.log("my milk money = " + milkMoney);
	var milkCost = 1.5;
	var totalCost = milkMoney / milkCost;
	var numBottles = Math.floor(milkMoney / milkCost);
	var remainder = (totalCost - numBottles).toFixed(2);

	console.log("numBottles " + numBottles);
	alert(
		"with $" +
			milkMoney +
			" you can get " +
			numBottles +
			" milk bottles, mate with " +
			remainder +
			" left over"
	);

	return milkMoney;
}

getMilkNumber(milkMoney);
