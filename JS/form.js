const elt = document.getElementById('submit');
   
elt.addEventListener('click', function() {          
    
	var inputLName = document.getElementById("lname");
	var inputFName = document.getElementById("fname");
	var inputAdress = document.getElementById("adress");
	var inputCity = document.getElementById("city");
	var inputEmail = document.getElementById("email");

	var user = {
		name: inputLName.value,
		fname: inputFName.value,
		adress: inputAdress.value,
		city: inputCity.value,
		email: inputEmail.value
	};

	localStorage.setItem("user", JSON.stringify(user));

});