
var objXMLHTTP;

var btn_ver = document.querySelector('#btn_view');
var btn_limpiar = document.querySelector('#btn_clear');

var box_ver =  document.querySelector('.lectura');

// Función inicial de la aplicación
function init(){
    btn_ver.addEventListener('click',controllerAJAX);

    btn_clear.addEventListener('click', ()=>{
        box_ver.innerHTML= "";
    });
}

// Controlador global AJAX
function controllerAJAX(){

    // 1.- Obteniendo el objeto XMLHttpRequest
    getXHTML();

    // 2.- Verificación de cambios de estado HTTP
    objXMLHTTP.onreadystatechange = serverResponse;

    // 3.- Petición HTTP
    objXMLHTTP.open('GET','./gases_nobles.json',true);

    // 4.- Envío de petición al servidor
    objXMLHTTP.send();
}

// Función para la obtención del objeto XMLHttpRequest
function getXHTML(){
        // alert('funcionando');
    if(window.XMLHttpRequest){
        objXMLHTTP = new XMLHttpRequest();
        // console.log(objXMLHTTP);
    } else if(window.ActiveXObject){
        objXMLHTTP = new ActiveXObject("MICROSOFT.XMLHTTP");
        // console.log(objXMLHTTPS);
    }
}

// Función verificadora de cambios en los estados HTTP
function serverResponse(){
    if(objXMLHTTP.readyState===4 && objXMLHTTP.status===200){
        
        // Variable que guarda la respuesta del servidor, misma que se está convirtiendo en un objeto JSON
        var contenido = JSON.parse(objXMLHTTP.responseText);

        if(box_ver.innerHTML===""){

            var i=1;

            // Iteración de cada atributo del objeto JSON
            for(dato in contenido){
                box_ver.innerHTML+=`<br/>`;
                box_ver.innerHTML+=`<ul>`;
                box_ver.innerHTML+=`<h3>Elemento ${i++}</h3>`;
                box_ver.innerHTML+=`<li>Nombre: ${contenido[dato].nombre}</li>`;
                box_ver.innerHTML+=`<li>Símbolo: ${contenido[dato].simbolo}</li>`;
                box_ver.innerHTML+=`<li>Número atómico: ${contenido[dato].num_atomico}</li>`;
                box_ver.innerHTML+=`<li>Masa atómica: ${contenido[dato].masa_atomica}</li>`;
                box_ver.innerHTML+=`</ul>`;
            }
        }

    }
}

init();
