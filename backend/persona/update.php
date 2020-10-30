<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPersona = json_decode(file_get_contents("php://input"));
if (!$jsonPersona) {
    exit("No hay datos");
}
$bd = include_once "../conexion.php";
$sentencia = $bd->prepare("UPDATE personas SET nombres = ?, apellidos= ?, departamento = ? WHERE id = ?");
$resultado = $sentencia->execute([$jsonPersona->nombres, $jsonPersona->apellidos, $jsonPersona->departamento, $jsonPersona->id]);
echo json_encode($resultado);