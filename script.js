let output = document.getElementById("output");

function handleButton(value) {
	output.value += value;
}

function clearOutput() {
	output.value = "";
}

function calculate() {
	try {
		output.value = eval(output.value);
	} catch (e) {
		output.value = "Error";
	}
}
