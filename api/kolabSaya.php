<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];

$usaha_id = $_GET['usaha_id'];

if ($method == 'GET'){
    $result = UserController::getKolabSaya($usaha_id);


    echo json_encode($result,JSON_PRETTY_PRINT);
}
