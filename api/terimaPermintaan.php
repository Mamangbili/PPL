<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];

$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

$usaha_id_1 = $data['usaha_id_1'];
$usaha_id_2 = $data['usaha_id_2'];


$result = UserController::terimaPermintaan($usaha_id_1,$usaha_id_2);
echo $result;