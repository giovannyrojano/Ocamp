<?php
header("Access-Control-Allow-Origin: http://localhost:4200");

if (empty($_GET["id"])) {
    exit("No existe esa persona");
}

$id=$_GET['id'];
$bd = include_once "../conexion.php";

$sentencia = $bd->prepare("select * from personas  where id=?");
$sentencia->execute([$id]);
if($sentencia){

$result = $sentencia->fetchObject();

echo json_encode($result);
}else{
 echo "ERROR EN EL QUERY";
}
?>