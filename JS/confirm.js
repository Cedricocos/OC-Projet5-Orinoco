var listProduct = getCart();
var total = 0;

for (let id of listProduct) {
	get("teddies/" + id).then(function(teddy){
		total += teddy.price;
	});
}

setTimeout(codePrice, 100);

function codePrice(){
	var price = document.getElementById("price");
	price.innerHTML = total / 100 + "€";
	var idCode = localStorage.getItem("code");
	var code = document.getElementById("code");
	code.innerHTML = idCode;
}

