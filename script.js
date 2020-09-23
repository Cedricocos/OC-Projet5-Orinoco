var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies");
request.send();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const card = document.createElement("div");
        const eltscript = document.getElementById("script");
        eltscript.appendChild(card);
        card.classList.add("card");
        card.classList.add("col-12");
        const p = document.createElement("p");
        card.appendChild(p);
        p.innerHTML = "Lien Effectué";
    }
    else {
    	const card = document.createElement("div");
    	const eltscript = document.getElementById("script");
    	eltscript.appendChild(card);
    	card.classList.add("card");
        card.classList.add("col-12");
    	const p = document.createElement("p");
        card.appendChild(p);
        p.innerHTML = "Erreur";
    }
};