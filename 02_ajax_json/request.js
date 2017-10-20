
// Decaración de variables
    var objectRequest; // objeto XMLHttpRequest
    var btn = document.querySelector('#btn_view'); // botón para mostrar información
    var btn_limpiar = document.querySelector('#btn_clear'); //botón para ocultar información
    var view_info = document.querySelector('.read'); // section del HTML donde se mostrá la información

// Función iniciadora de la aplicación
function init(){

    // Asignación de la función 'controllerAJAX' al botón 'VER INFO'
    btn.addEventListener('click',controllerAJAX);

    // Asignación de funcionalidad que permitirá eliminar el contenido del section con el botón 'OCULTAR INFO'
    btn_limpiar.addEventListener('click', () => {
        view_info.innerHTML = "";
    });
}

// Función controladora que permitirá ejecutar AJAX
function controllerAJAX(){

    // 1.- Obteniendo el objeto XMLHttpRequest
    getXMLHTTP();

    // 2.- Asignación de la función que se ejecutará cuando exista un cambio
    objectRequest.onreadystatechange = serverResponse;

    // 3.- Creación de la petición HTTP solicitando el archivo 'users.json'
    objectRequest.open('GET','./users.json',true);

    // 4.- Enviando petición al servidor
    objectRequest.send();
}

// Función encargada de obtener el objeto XMLHttpRequest
function getXMLHTTP(){
    if(window.XMLHttpRequest){
        objectRequest = new XMLHttpRequest();
        // console.log(objectRequest);
    } else if(window.ActiveXObject('Microsoft.XMLHTTP')){
        objectRequest = new ActiveXObject();
        // console.log(objectRequest);
    }
}

// Función manejadora de las respuestas del servidor
function serverResponse(){
    if(objectRequest.readyState==4 && objectRequest.status==200){

        // Variable almacenadora de la respuesta del servidor
        // .parse permitirá transformar la cadena de texto obtenida de la respuesta del servidor en un objeto JSON
        var datos = JSON.parse(objectRequest.responseText);
        
        // if que permitirá mostrar sólo una vez los datos en pantalla
        if(view_info.innerHTML === ""){ // si el section está vacío

            // iterador para mostrar cada uno de los valores y propiedades del archivo .json
            for(dato in datos){ // cada 'dato' es igual a un valor declarado en el .json y recorrerá el objeto JSON 'datos'
                view_info.innerHTML += `${dato} : ${datos[dato]}<br/>`;
                
            }
        }
    }
}

// Ejecución de la función iniciadora cuando se abra la aplicación
init();