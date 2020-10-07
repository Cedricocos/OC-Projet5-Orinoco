function get(api) {
	return new Promise(function(resolve, reject){
		var request = new XMLHttpRequest();
		request.open("GET", "http://localhost:3000/api/" + api)
		request.send();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				resolve(JSON.parse(this.responseText));
			} else if (this.readyState == 4 && this.status != 200) {
				reject();
			}
		}
	});
};		

function post() {
	return new Promise(function(resolve, reject){
		var request2 = new XMLHttpRequest();
		request2.open()
		request2.send("POST", "");
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				resolve(JSON.parse(this.responseText));
			} else if (this.readyState == 4 && this.status != 200) {
				reject();
			}
		}
	});
};