var objAJAX;

const btn_calculate = document.querySelector('#calcular');
const caja_valor = document.querySelector('#value');

var nombreUser;

// Función iniciadora de la apliación
function init(){
    btn_calculate.addEventListener('click', controllerAJAX);
}

// Función que obtiene el objeto XMLHttpRequest
function getAJAX(){
    // console.log('funciona');
    if(window.XMLHttpRequest){
        objAJAX = new XMLHttpRequest();
        // console.log(objAJAX);
    } else if(window.ActiveXObject){
        objAJAX = new ActiveXObject('Microsoft.XMLHTTP');
        // console.log(objAJAX);
    }
}

// Función controladora AJAX
function controllerAJAX(){

    // 1.- Obtención del objeto XMLHttpRequest
    getAJAX();

    // 2.- Espera cambios de estado HTTP
    objAJAX.onreadystatechange = serverResponse;

    // 3.- Creación de la petición HTTP
    objAJAX.open('GET','users.json',true);

    // 4.- Envío de la petición al sevidor
    objAJAX.send();
}

// Función respuesta del servidor
function serverResponse(){
    if(objAJAX.readyState===4 && objAJAX.status===200){
        var respuesta = JSON.parse(objAJAX.responseText);

        // Variable que almacenará el valor menor al procesar 'respuesta' con la función 'getUser'
        var userMenor = getUser(respuesta);

        // Condicional que permitirá imprimir una sola vez en pantalla de la edad y nombre del usuario menor
        if(caja_valor.innerHTML===""){
            caja_valor.innerHTML += `La edad menor es de: ${userMenor} y corresponde a ${name}`;
        }

    }  
}

// Función que realizará el cálculo para obtener el valor mayor
function getUser(respuestaJSON){

    // Arreglos vaciós en los cuales se guardarán los valores de las edades y nombres del objeto JSON 
    var edades = [];
    var nombres = [];

    // Iteración al objeto JSON para obtener los valores de cada edad y sus nombres
    for(val in respuestaJSON){

        // Variables que almacenarán cada una de las edades y nombres del objeto JSON
        var personaEdad = respuestaJSON[val].edad;
        var nombreUser = respuestaJSON[val].nombre;

        // Con push se envía cada una de las edades y nombres del objeto JSON, llenado así el arreglo 'edades' y 'nombres'
        edades.push(personaEdad);
        nombres.push(nombreUser);
    }

    // Variable en la cual se especifica la primera posición del arreglo 'edades'
    var menorEdad = edades[0];

    // Iteración para recorrer cada uno de los valores del arreglo 'edades'
    for(var i=0; i<edades.length; i++){

        // Condicional para comparar los valores del arreglo 'edades' y obtener así el valor menor/mayor
        if(edades[i] > menorEdad){
            menorEdad = edades[i];

            // Asignación a la variable 'name' el nombre de aquella edad que es menor/mayor
            name = respuestaJSON[i].nombre;
        }
    }

    // La función 'getUser' devuelve el valor 'menorEdad' ya que es el valor que se deseaba obtener
    return menorEdad;
}

window.onload = init();