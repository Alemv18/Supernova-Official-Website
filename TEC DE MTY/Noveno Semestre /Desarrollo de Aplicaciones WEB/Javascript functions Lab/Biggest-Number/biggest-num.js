function biggestNumber() {
	var x = prompt("Write first number:", "0");
	var y = prompt("Write second number:", "0");
	var z = prompt("Write third number:", "0");

	document.getElementById("container").innerHTML += x + "<br>" + y + "<br>" + z

	var numbers = [x, y, z];
	var maxNumber = Math.max.apply(null, numbers);
	alert("The biggest number is:" + maxNumber);
				
}



