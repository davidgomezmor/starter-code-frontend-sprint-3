
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("name");
	var fEmail = document.getElementById("email");
	var fAddress = document.getElementById("address");
	var fLastN = document.getElementById("lastN");
	var fPassword = document.getElementById("password");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "" || fName.value.length < 3) {
		error++;
	}

	if (fEmail.value == "" || fEmail.value.length < 3) {
		error++;
	}
	if (fAddress.value == "" || fAddress.value.length < 3) {
		error++;
	}
	if (fLastN.value == "" || fLastN.value.length < 3) {
		error++;
	}
	if (fPassword.value == "" || fPassword.value.length < 3) {
		error++;
	}

	
	 
	
	/* function validateLetters() {
const letters = /^[a-zA-Z\s]*$/;
let letter = false

const letter = parameter.search(letters)){
	return false;
} else {
	return true;
}
}

if (validateLetters(fName)){

}

let email = (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
let password = (/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,8}$/);
let phoneNumber =  (/^\d{9}$/);
*/
	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}
