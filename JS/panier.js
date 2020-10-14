getCart().then(function(data){
	for (let teddy of data) {
			const card = document.createElement("div");
			card.setAttribute("class","card col-lg-12 col-sm-12 mb-3");

			const img = document.createElement("img");
			img.setAttribute("src", teddy.imageUrl);  //Image de l'ours
			img.setAttribute("class", " mt-2")
			card.appendChild(img);

			const body = document.createElement("div");
			
			const h5 = document.createElement("h5");
			h5.setAttribute("class","card-title");
			h5.innerHTML = teddy.name;              //Nom de l'ours
			body.appendChild(h5);

			const p = document.createElement("p");
			p.setAttribute("class","card-text");
			p.innerHTML = teddy.description;        //Description de l'ours
			body.appendChild(p);

			const h6 = document.createElement("h6");
			h6.setAttribute("class","card-text");
			h6.innerHTML = teddy.price / 100 + "€";              //Prix de l'ours
			body.appendChild(h6);

			card.appendChild(body);


			const list = document.getElementById("listTeddies");
			list.appendChild(card);
		}
});