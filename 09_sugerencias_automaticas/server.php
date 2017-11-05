<?php 

    $usuarios = array("Aaron","Vicente","Guadalupe","Pedro","Andres","Catalina","Xochitl","Gabriela","Fernando","Marcos","Ivan","Helena","Roberto","Daniela","Daniel","Javier","Eulalio","Luisa","Octavio","Natalia","Gustavo","Ulises","Pamela","Olivia","Luis");

    $nombre = $_GET["name"];
    $sugerir = "";

    if($nombre !== ""){
        $nombre = strtolower($nombre);
        $cantidad_caracteres = strlen($nombre);

       // iteración entre los cracteres del array 'usuarios'
       foreach($usuarios as $usuario) {
           $nombres_bd = substr($usuario,0,$cantidad_caracteres);

           if(stristr($nombre, $nombres_bd) !== false){
                if($sugerir === ""){
                    $sugerir = $usuario;
                } else {
                    // $sugerir = $usuario;
                    $sugerir .= ", $usuario";
                }
           }
       }

    }

    echo ($sugerir === "") ? "NO hay coincidencias" : $sugerir ;

    // strtolower convierte en minusculas lo que este en '$nombre'
    // strlen devuelve el total de caracteres en un string
    // substr  analiza cada elemento recorrido desde un aposición determinada hasta el total de caracteres que cuante cada elemento
    // strstr compara y determina la coincidencia de los cracteres existentes entre dos strings
?>