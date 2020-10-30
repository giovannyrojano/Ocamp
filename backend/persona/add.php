<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");

$jsonPersona = json_decode(file_get_contents("php://input"));

if (!$jsonPersona) {
    exit("No hay datos");
}
$bd = include_once "../conexion.php";
$sentencia = $bd->prepare("insert into personas(nombres, apellidos,departamento) values (?,?,?)");
$resultado = $sentencia->execute([$jsonPersona->nombres, $jsonPersona->apellidos, $jsonPersona->departamento]);
echo json_encode([
    "resultado" => $resultado,
]);