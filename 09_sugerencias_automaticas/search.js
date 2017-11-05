
// Objeto XMLHttpRequest
var objectXML;

// Referencia hacia elementos del DOM
const buscar_nombre = document.querySelector("#input_nombre");
const box_sugerencia = document.querySelector("#info");

// Función inicial de la aplicación
function init(){
    buscar_nombre.focus();
    buscar_nombre.addEventListener('keyup', controllerAJAX);
}

function controllerAJAX(){
    var buscar_value = buscar_nombre.value;

    getXML();

    if(buscar_value.length===0){
        box_sugerencia.innerHTML = "";
    } else {
        objectXML.onreadystatechange = () => {
            if(objectXML.readyState===4 && objectXML.status===200){
                var respuesta = objectXML.responseText;
                box_sugerencia.innerHTML = respuesta;
            }
        }   
    }

    objectXML.open("GET","server.php?name="+buscar_value,true);
    objectXML.send();
}

// Función para obtener el objeto XMLHttpRequest
function getXML(){
    if(window.XMLHttpRequest){
        objectXML = new XMLHttpRequest();
        // console.log(objectXML);
    } else if(window.ActiveXObject){
        objectXML = new ActiveXObject("Microsoft.XMLHTTP");
        // console.log(objectXML);
    }
}

init();