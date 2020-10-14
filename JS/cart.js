function addCart(id){

	var cart = getCart();
	cart.push(id);

	localStorage.setItem("cart", JSON.stringify(cart));  

}

function getCart(){

	var cart = localStorage.getItem("cart");
	if (cart == null){
		return [];
	} else {
		return JSON.parse(cart);
	}

}