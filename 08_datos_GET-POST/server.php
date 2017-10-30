<?php 
    $num1 = $_GET['v1'];
    $num2 = $_GET['v2'];

    $suma = $num1 + $num2;
    $resta = $num1 - $num2;
    $multipliacion = $num1 * $num2;

    // 'ctype_digit' permite verificar si los caracteres de un string son números
    if(!ctype_digit($num1) || !ctype_digit($num2)){
        echo '<h3>Ingresar sólo números</h3>';
    } else {
        echo '<h3>OPERACIONES</h3>';
        echo '<h4>'. $num1 .' + '. $num2 .' = '. $suma .'</h4>';
        echo '<h4>'. $num1 .' - '. $num2 .' = '. $resta .'</h4>';
        echo '<h4>'. $num1 .' * '. $num2 .' = '. $multipliacion .'</h4>';
    }
?>