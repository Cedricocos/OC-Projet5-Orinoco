var listProduct = getCart();
var total = 0;

for (let id of listProduct) {
	get("teddies/" + id).then(function(teddy){
		const card = document.createElement("div");
		card.setAttribute("class","card col-lg-12 mb-2");

		const row = document.createElement("div");
		row.setAttribute("class", "row no-gutters");
		card.appendChild(row);

		const divimg = document.createElement("div");
		divimg.setAttribute("class", "col-auto");
		row.appendChild(divimg);

		const img = document.createElement("img");
		img.setAttribute("src", teddy.imageUrl);  //Image de l'ours
		img.setAttribute("class", "img-fluid img");
		divimg.appendChild(img);

		const divcol = document.createElement("div");
		divcol.setAttribute("class", "col");
		row.appendChild(divcol);

		const body = document.createElement("div");
		body.setAttribute("class", "card-block px-2");

		const h4 = document.createElement("h4");
		h4.setAttribute("class","card-title");
		h4.innerHTML = teddy.name;              //Nom de l'ours
		body.appendChild(h4);

		const p = document.createElement("p");
		p.setAttribute("class","card-text");
		p.innerHTML = teddy.description;        //Description de l'ours
		body.appendChild(p);

		const h6 = document.createElement("h6");
		h6.setAttribute("class","card-text");
		h6.innerHTML = teddy.price / 100 + "€";              //Prix de l'ours
		body.appendChild(h6);

		divcol.appendChild(body);

		const list = document.getElementById("listTeddies");
		list.appendChild(card);
		
		total += teddy.price;
	});
}

setTimeout(totalShow, 500)

function totalShow(){
	var totalPrice = document.getElementById("totalPrice");
	totalPrice.innerHTML = total / 100 + "€";
}
