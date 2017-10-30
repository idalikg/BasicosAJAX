
// Objeto XMLHttpRequest
var objXML;

// Referencia hacia elementos del DOM (inputs y botón)
const name = document.querySelector('#input_nombre');
const lastname = document.querySelector('#input_apellido');
const boxInfo = document.querySelector('#info');

var btn_enviar = document.querySelector('#enviar');

// Función principal de la apliación
function init(){
    // Asignación del evento click al botón 'btn_enviar'
    btn_enviar.addEventListener('click', processPHP);

    name.focus();
}

function processPHP(){

    // 1.- Obtención del objeto XMLHttpRequest
    getXMLHTTP();

    // Obtención del valor de los inputs 'name' y 'lastename'
    var nameVal = name.value;
    var lastnameVal = lastname.value;

    // Variable que almacenará la información que se tiene en los inputs y que serán enviados al servidor
    var datosUser = `nombre=${nameVal}&apellido=${lastnameVal}`;

    // 2.- Verificación de cambios de estado
    objXML.onreadystatechange = () => {
        if(objXML.readyState===4 && objXML.status===200){
            var respuesta = objXML.responseText;
                boxInfo.innerHTML = respuesta;
                // console.log(datosUser);
        }
    };

    // 3.- Creación de petición HTTP, indicando el archivo 'server.php' donde serán enviados la información almacenada en 'infoUser'
    objXML.open("POST","server.php",true);

    // 4.- Envío de la información hacia el servidor con el método 'setRequestHeader'
    objXML.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    // 5.- Envío de la petición HTTP al servidor
    objXML.send(datosUser);

    restart();
}

// Función para obtener el objeto XMLHttpRequest
function getXMLHTTP() {
    if(window.XMLHttpRequest){
        objXML = new XMLHttpRequest();
        // console.log(objXML);
    } else if(window.ActiveXObject){
        objXML = new ActiveXObject("Microsoft.XMLHTTP");
        // console.log(objXML);
    }
}

// Función que limpia los campos y pone el foco en el input de 'nombre'
function restart(){
    name.focus();
    name.value="";
    lastname.value="";
}

// Inicialización de la función 'init'
window.onload = init();