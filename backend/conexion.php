<?php
$contraseña = "";
$usuario = "root";
try {
    return new PDO('mysql:host=localhost; dbname=web',$usuario, $contraseña);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}