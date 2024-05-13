function calculate() {
	var value1 = parseFloat(document.getElementById("value1").value);
	var value2 = parseFloat(document.getElementById("value2").value);
	var operator = document.getElementById("operator").value;
	var result;

	switch(operator) {
		case '+':
			result = value1 + value2;
			break;
		case '-':
			result = value1 - value2;
			break;
		case '*':
			result = value1 * value2;
			break;
		case '/':
			if (value2 == 0) {
				alert("Cannot divide by zero");
				return;
			}
			result = value1 / value2;
			break;
	}

	document.getElementById("result").innerHTML = "Result: " + result;
}