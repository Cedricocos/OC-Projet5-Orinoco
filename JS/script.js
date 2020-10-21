function get(api) {
	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				resolve(JSON.parse(this.responseText));
			} else if (this.readyState == 4 && this.status != 200) {
				reject();
			}
		}
		request.open("GET", "http://localhost:3000/api/" + api);
		request.send();
	});
};		

function post(api, data) {
	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 201) {
				resolve(JSON.parse(this.responseText));
			} else if (this.readyState == 4 && this.status != 201) {
				reject(this.responseText);
			}
		}
		request.open("POST", "http://localhost:3000/api/" + api);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(data));
	});
};