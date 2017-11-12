
var objXML;

var btnMostrar = document.querySelector("#boton_ver");
var boxVer=document.querySelector("#info");

function init(){ 
	btnMostrar.addEventListener("click", controladorAJAX);
}

function controladorAJAX(){

	getXML();

	objXML.onreadystatechange = () => {
		if (objXML.readyState===4 && objXML.status===200) {
			var respuesta = objXML.responseText;
			boxVer.innerHTML = respuesta;
		}
	}

	objXML.open("GET","server.php",true);

	objXML.send();

}

function getXML() {
	if (window.XMLHttpRequest) {
		objXML = new XMLHttpRequest();
		// console.log(objXML);
	} else if (window.ActiveXObject) {
		objXML = new ActiveXObject('Microsoft.XMLHTTP');
		// console.log(objXML);
	}
}

init();