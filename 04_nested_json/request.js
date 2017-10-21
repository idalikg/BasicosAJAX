
// Objeto XMLHttpRequest
var objXHTML;

var boton_ver = document.querySelector('#btn_view');
var boton_borrar = document.querySelector('#btn_clean');
var caja_texto = document.querySelector('#box_info');

// Nombre del archivo a solicitar
var file = 'movies.json';

// Función iniciadora de la aplicación
function app(){

    boton_ver.addEventListener('click', controllerAJAX);

    boton_borrar.addEventListener('click', () => {
        caja_texto.innerHTML = "";
    })
}

// Función que obtiene el objeto XMLHttpRequest
function getXHTML(){
    if(window.XMLHttpRequest){
        objXHTML = new XMLHttpRequest();
        // console.log(objXHTML);
    } else if(window.ActiveXObject){
        objXHTML = new ActiveXObject("Microsoft.XMLHTTP");
        // console.log(objXHTML);
    }
}

// Función controladora AJAX
function controllerAJAX(){
    // alert('funcionando');

    // 1.- Obtención del objeto XMLHttpRequest
    getXHTML();

    // 2.- Verificación de cambios de estado HTTP 
    objXHTML.onreadystatechange = serverResponse;

    // 3.- Creación de la petición HTTP
    objXHTML.open('GET', file, true);

    // 4.- Envío de la petición al servidor
    objXHTML.send();

}

// Función que devuelve la respuesta del servidor
function serverResponse(){
    if(objXHTML.readyState===4 && objXHTML.status===200){

        // Variable que guarda como respuesta cada objeto principal JSON
        let respuesta = JSON.parse(objXHTML.responseText);

        // Condicional que permite imprimir sólo una vez la información extraída del archivo JSON
        if(caja_texto.innerHTML == ""){

            // Iterador de cada objeto principal JSON
            for(movie in respuesta){
                caja_texto.innerHTML += `<h3>${movie}</h3>`;

                // Variable que almacena las propiedades y valores de cada objeto secundario 
                var info = respuesta[movie]; 

                // Iterador de los valores existentes en las propiedades de los objetos secundarios
                for(i in info){
                    caja_texto.innerHTML += `<li><b>${i}: </b> ${info[i]}</li>`;
                }
                caja_texto.innerHTML += `<br>`;
            }
        }
    }

}

app();