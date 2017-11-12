<?php
	$mysql_host = 'localhost'; // nombre del host
	$mysql_usuario = 'root'; // nombre de usuario del sevidor
	$mysql_clave = ''; // contraseña del servidor
	$mysql_bd = 'clientes'; // nombre de la base de datos

	// Conexión a la Base de Datos
	$conexion = mysqli_connect($mysql_host, $mysql_usuario, $mysql_clave, $mysql_bd);

	// Vrificación de conexión a la Base de datos
	if(mysqli_connect_errno()){
		echo 'Error de conexión'.mysqli_connect_error();
	} /* else {
		echo 'Conectado';
	} */
?>