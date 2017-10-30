<?php 
    
    // Variables que almacenarán los valores 'nombre' y 'apellido' que vienen en la variable 'datosUser'
    $nom = $_POST['nombre'];
    $ape = $_POST['apellido'];

    // condicional para valorar si ambos valores están vacíos 
    if(empty($nom) || empty($ape)){
        echo '<h3>Introduce un nombre y un apellido</h3>';
    } else {
        echo '<h3>El usuario '. $nom . ' ' . $ape . ' se registró correctamente</h3>';
    }

?>