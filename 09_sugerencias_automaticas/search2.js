
// Objeto XMLHttpRequest
var objectXML;

// Referencia hacia elementos del DOM
const buscar_nombre = document.querySelector("#input_nombre");
const boxInfo = document.querySelector("#info");

// Función inicial de la aplicación
// function init(){
    // buscar.focus();
    buscar_nombre.addEventListener('keyup',() => {
       

        getXML();

        var buscar_value = buscar_nombre.value;
        var search = `name=${buscar_value}`;

        if(buscar_value.length===0){
            boxInfo.innerHTML = "";
        } else {
            objectXML.onreadystatechange = () => {
                if(objectXML.readyState===4 && objectXML.status===200){
                    var respuesta = objectXML.responseText;
                    boxInfo.innerHTML = respuesta; 

                    // boxInfo.innerHTML = objectXML.responseText;
                }
            }   
        }

        objectXML.open("GET","server.php?"+search,true);
        objectXML.send();
    });
// }

// function controllerAJAX(){
//     // alert('funciona');  
    
// }

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

// init();