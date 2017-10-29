 // Objeto XMLHttpRequest
var objXML;

// Refencia hacia elementos del DOM (input y div)
var querySearch = document.querySelector('#query');
var caja_info = document.querySelector('#info');


// Asignación del evento 'keyup' al input que se activará cuando se oprima y/o suelte una tecla
querySearch.addEventListener('keyup', () => {
    
    // Declaración de la variable que almacenará texto del input
    var valor = querySearch.value;

    // 1.- Obtención del objeto XMLHttpRequest
    getXHTML();
    
    // Condicional que evaluará si el input tiene contenido
    if(valor.length === 0){ // si el input está vació
        caja_info.innerHTML = ""; // entonces en el div no se mostrará nada
    } else { 

        // De lo contrario, si el div tiene contenido
        objXML.onreadystatechange = () => { // 2.- Se verificará cambios de estado en las peticiones HTTP
            
            // y si la conexión ha sido completada correctamente y exitosamente
            if(objXML.readyState===4 && objXML.status===200){

                // Se almacenará y se transformará en un objeto JSON la respuesta del servidor
                var respuesta = JSON.parse(objXML.responseText);

                // mientras tanto 'busqueda' almacenará el valor que se obtenga en la ejecución de la función 'buscarPersona', y a la variable 'msj' se le asignará un string (mensaje) como valor dependiendo si 'busqueda' devuelve true o false
                var busqueda = buscarPersona(respuesta, valor);
                var msj = (busqueda === true) ? "Usuario SI existe" : "Usuario NO existe";

                // Según al valor de 'msj' se imprimirá el mensaje que corresponda en el div
                caja_info.innerHTML = msj;

                // console.log(valor.length);
                // console.log(busqueda)   
            }
        }
    }

        // 3.- Creación de la petición HTTP
        objXML.open('GET','users.json',true);

        // 4.- Envío de la petición HTTP al servidor
        objXML.send();

});

// Función que realizará la busqueda de nombres de usuario
function buscarPersona(objJSON, user) { // recibe el objeto JSON 'respuesta' y el contenido de la div almacenado en 'valor'
    
    // Arreglo que almacenará los valores de la propiedad 'nombre' de cada objeto JSON
    var myUsers = [];

    // Iteración al objeto JSON para obtener valor de 'nombre'
    for(var x in objJSON){
        var person = objJSON[x]; // 'person' es igual al nombre de cada objeto
        myUsers.push(person.nombre); // almacenamiento de los nombres en el arreglo 'myUsers'
    }

    // retorno del valor (true/false) de la comparación y concordancia de valores existentes dentro del arreglo 'myUsers' con el contenido del div, y que será devuelto en 'busqueda'
    return myUsers.indexOf(user) > -1; // -1 igual a false, 1 igual a true  

}

// Función que obtendrá el valor del objeto XMLHttpRequest
function getXHTML(){
    if(window.XMLHttpRequest){
        objXML = new XMLHttpRequest();
        // console.log(objXML);
    } else if(window.ActiveXObject){
        objXML = new ActiveXObject("Microsoft.XMLHTTP");
        // console.log(objXML);
    }
}