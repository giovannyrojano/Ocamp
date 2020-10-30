<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../conexion.php";

$sentencia = $bd->query("select * from personas");
if($sentencia){

$result = $sentencia->fetchAll(PDO::FETCH_OBJ);

echo json_encode($result);
}else{
 echo "ERROR EN EL QUERY";
}
