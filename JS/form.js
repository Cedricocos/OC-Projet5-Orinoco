const elt = document.getElementById('submit');

   
elt.addEventListener('click', async function() {          
    
	var inputLName = document.getElementById("lname");
	var inputFName = document.getElementById("fname");
	var inputAdress = document.getElementById("adress");
	var inputCity = document.getElementById("city");
	var inputEmail = document.getElementById("email");

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

	var result = await post("teddies/order", order);

	window.location.replace("confirm.html"); 

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