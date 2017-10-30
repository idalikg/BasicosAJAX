
// Objeto XMLHttpRequest
var objXML;

// Referencia hacia elementos del DOM (inputs y botón)
const valor1 = document.querySelector('#num1');
const valor2 = document.querySelector('#num2');

var btn_enviar = document.querySelector('#enviar');

const boxInfo = document.querySelector('#info');

// Función principal de la aplicación
function app() {
    valor1.focus();
    btn_enviar.addEventListener('click', controllerAJAX);
}

// Controlador AJAX
function controllerAJAX(){

    // 1.- Obtención del objeto XMLHttpRequest
    getXML();

    // Obtención del valor de los inputs
    var val1 = valor1.value;
    var val2 = valor2.value;

    // Variable que almacenará la cadena de los valores a enviar
    var valores = `v1=${val1}&v2=${val2}`;

    // 2.- Verificación de cambios de estados
    objXML.onreadystatechange = () => {
        if(objXML.readyState===4 && objXML.status===200){
            var resultado = objXML.responseText;
            boxInfo.innerHTML = resultado;
            // console.log(valores);
        }
    };

    // 3.- Creación de la petición HTTP con el método GET y envío de valores de manera concatenada
    objXML.open('GET','server.php?' + valores ,true);

    // 4.- Envío de la peticion HTTP al servidor
    objXML.send();

    // Reestablecimiento de valores
    restart();
}

// Función para obtener objeto XMLHttpRequest
function getXML(){
    if(window.XMLHttpRequest){
        objXML = new XMLHttpRequest();
        // console.log(objXML);
    } else if(window.ActiveXObject){
        objXML = new ActiveXObject('Microsoft.XMLHTTP');
        // console.log(objXML);
    }
}

// Función reinicio
function restart() {
    valor1.focus();
    valor1.value = "";
    valor2.value = "";
    boxInfo.value = "";
}

window.onload = app;