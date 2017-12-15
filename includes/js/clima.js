function buscar(){
	var dir = "http://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&q=Bahia%20Blanca,%20ar&APPID=cb33f61955af79d7c26379413659e30d";
	serverRequest(dir,procesarRespuestaHoy);
}

function procesarRespuestaHoy(jsonResponse){
	/*var lat =  jsonResponse.coord.lat;
	var lon =  jsonResponse.coord.lon;*/

	document.getElementById("temp-hoy").innerHTML = jsonResponse.main.temp+" ºC";
	document.getElementById("icon-hoy").src="http://openweathermap.org/img/w/"+jsonResponse.weather[0].icon+".png";
}

function serverRequest(url, callback ){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onload = function() {
	if (xmlhttp.readyState == 4 || xmlhttp.status == 200) {
	var resultado = JSON.parse(xmlhttp.response);
	callback(resultado);
	}
	};
	//xmlhttp.responseType = "json";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}	