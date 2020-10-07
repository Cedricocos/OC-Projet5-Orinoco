var param = new URLSearchParams(window.location.search);
var id = param.get("id");

get("teddies/" + id).then(function(data){
			const card = document.createElement("div");
			card.setAttribute("class","card col-lg-12 mb-3");

			const cardB = document.createElement("div");
			cardB.setAttribute("class","card-body");
			card.appendChild(cardB);

			const h2 = document.createElement("h2");
			h2.setAttribute("class","card-title");
			h2.innerHTML = data.name;              //Nom de l'ours
			cardB.appendChild(h2);

			const img = document.createElement("img");
			img.setAttribute("src", data.imageUrl);  //Image de l'ours
			img.setAttribute("class", "card-img-top mt-2")
			cardB.appendChild(img);

			const p = document.createElement("p");
			p.setAttribute("class","card-text");
			p.innerHTML = data.description;        //Description de l'ours
			cardB.appendChild(p);

			const h5 = document.createElement("h5");
			h5.innerHTML = "Choisissez une couleur :";         //Couleur
			cardB.appendChild(h5);

			const select = document.createElement("select");
			select.setAttribute("name", "color");
			select.setAttribute("id", "color-select");
			data.colors.forEach(element => console.log(element));
				const option = document.createElement("option");
				option.innerHTML = data.colors;
				select.appendChild(option);
			;

			const p2 = document.createElement("p");
			p2.innerHTML = data.price / 100 + "€";              //Prix de l'ours
			cardB.appendChild(p2);

			const a = document.createElement("a");
			a.setAttribute("class", "btn btn-primary mb-2");
			a.setAttribute("href", "id.html?id=" + data._id);
			a.innerHTML = "Ajouter au panier"; 
			a.onclick = function() {localStorage.setItem("dataTeddies", data);};           //Ajout au panier
			card.appendChild(a);


			const byId = document.getElementById("byId");
			byId.appendChild(card);
		})

;

/*
localStorage.setItem(data.name, data);
localStorage.getItem(data.name;
*/