<?php
	require 'conexion.php';

	$consulta = "SELECT * FROM users";
	
	$resultado_conexion = mysqli_query($conexion, $consulta);

	$usuarios_list = "";

	$usuarios_list .= "<table>";
	$usuarios_list .= "<tr>";
	$usuarios_list .= "<th>Nombre</th>";
	$usuarios_list .= "<th>Correo</th>";
	$usuarios_list .= "</tr>";

	while( $fila = mysqli_fetch_assoc($resultado_conexion) ){
		$usuarios_list.="<tr>";
		$usuarios_list.="<td>".$fila['name']."</td>";
		$usuarios_list.="<td>".$fila['email']."</td>";
		$usuarios_list.="</tr>";
	}

	$usuarios_list.="</table>";

	echo $usuarios_list;

	$conexion->close();

?>

