const elt = document.getElementById('submit');

   
elt.addEventListener('click', function() {          
    
	var inputLName = document.getElementById("lname");
	var inputFName = document.getElementById("fname");
	var inputAdress = document.getElementById("adress");
	var inputCity = document.getElementById("city");
	var inputEmail = document.getElementById("email");
	var checkForm = true;

	inputLName.classList.remove("error");
	inputFName.classList.remove("error");
	inputAdress.classList.remove("error");
	inputCity.classList.remove("error");
	inputEmail.classList.remove("error");

	if (!inputLName.checkValidity()) {
		checkForm = false;
		inputLName.classList.add("error");
	}

	if (!inputFName.checkValidity()) {
		checkForm = false;
		inputFName.classList.add("error");
	}

	if (!inputAdress.checkValidity()) {
		checkForm = false;
		inputAdress.classList.add("error");
	}

	if (!inputCity.checkValidity()) {
		checkForm = false;
		inputCity.classList.add("error");
	}

	if (!inputEmail.checkValidity()) {
		checkForm = false;
		inputEmail.classList.add("error");
	}

	if (checkForm) {
		var order = {
		contact: {
			firstName: inputFName.value,
   			lastName: inputLName.value,
  			address: inputAdress.value,
  			city: inputCity.value,
   			email: inputEmail.value
		},
		products: getCart()
		};

		post("teddies/order", order).then(function(data){
			localStorage.setItem("code", data.orderId);
			window.location.assign("confirm.html?id=" + data.orderId);
		}).catch((error) => {
			console.log(error);
		}
		);
	}

	

});

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */