
# **CONCEPTOS BÁSICOS**

## ***AJAX***

## ***Objeto XMLHttpRequest***
### Objeto que permitirá llevar a cabo la comunicación con el servidor.  Este se obtiene a travez del objeto global *window*, sin embargo, para el caso de navegadores modernos se obtiene directamente con el objeto *XMLHttpRequest*.  O bien, si se trata de navegadores antiguos, entonces se obtiene a través del objeto ActiveX.

## ***onreadystatechange()***
### Método del objeto *XMLHttpRequest* que permite declarar y preparar la función que ejecutará o procesará la respuesta del servidor.  En sí mismo es el manejador de eventos que reaccionará ante cualquier cambio de estado que se registre despúes de cada petición HTTP. 

### ***readyState***
### Es la propiedad del objeto *XMLHttpRequest* que almacenará el valor de la respuesta del servidor. Es decir, determina la condición en la cual el servidor está procesando las peticiones recibidas por el cliente. Basicamente informa sobre el estado de la conexión entre ambas partes. Los valores posibles que maneja el servidor como respuesta son cinco, siendo estos 0, 1, 2, 3 y 4; y donde el último valor especifica que la petición ha sido finalizada.

### ***status***
### Propiedad del objeto *XMLHttpRequest* que permite comprobar si la respuesta a la petición ha sido exitosa por parte del servidor, es decir, determina el estado de la comunicación entre el cliente y el servidor.  De manera general son mensajes que envia el sevidor al cliente (navegador) para mantenerlo informado sobre el estado en el cual se encuentran las peticiones que este último le solicita. Dicho de otra forma, determina la manera en como está respondiendo el servidor respecto a la entrega y recepción de los recursos entre el cliente y el servidor.  Los posibles valores para esta propiedad oscila en rangos de las siguientes cifras: 100, 200, 300, 400 y 500.

### ***responseText***
### Propiedad del objeto *XMLHttpRequest* que devuelve la respuesta del servidor en forma de cadena de texto.  En este caso podrá regresar todo aquel archivo que sea solicitado por el clinte.

## ***open()***
### Método del objeto *XMLHttpRequest* crea las peticiones HTTP, y de manera básica permite especificar los siguientes parámetros: -tipo de petición HTTP (GET o POST)  -URL del recurso solicitado por el cliente -Valor booleano para especificar si va a ser una petición asíncrona (TRUE) o síncrona (FALSE).  Ejemplo: *objetoXMLHttpRequest.open('GET','file.txt','true')*

## ***send()***
### Método del objeto *XMLHttpRequest* que permite enviar al servidor la petición creada con *open()*.