<?php
session_start();

// If logged in go to the login page

require_once '../../vendor/autoload.php';
use \Firebase\JWT\JWT;
use Firebase\JWT\Key;
require_once "../Z_requirements/db_connect.php";
require_once '../Z_requirements/classes.php';
//putenv('ACCESS_TOKEN_SECRET=secret');
$secret_key = "secret";

$jwt_token = null;
if (isset($_COOKIE['jwt'])) {
    $jwt_token = $_COOKIE['jwt'];
}

if(!$jwt_token)
{
  $response['message']="Session expired";
    exit();
}

try {
    // Verify JWT token 
    $payload = JWT::decode($jwt_token, new Key($secret_key, 'HS256'));
} catch (Exception $e) {
    // JWT token is invalid
    $response['message']="Session expired";
    exit();
}

$split_token = explode(".", $jwt_token);
$payload_decoded = json_decode(base64_decode($split_token[1]));
$username = $payload_decoded->name;

/* empty array to _push elements of the Pc_of_clothing class */
$clothing = array();
$directories = array();

$login_clothes_get_id = "select * from users where userlogin='$username'";
$login_clothes2 = $login_db->query($login_clothes_get_id);
$row_db = $login_clothes2->fetch(PDO::FETCH_ASSOC);
$user_id = $row_db['userid'];

/* Randomizing pushing into the array each piece of clothing with the function */
  array_push($clothing, randomize_clothes('hoodie', $clothing, $user_id));
  array_push($clothing, randomize_clothes('shirt', $clothing, $user_id));
  array_push($clothing, randomize_clothes('pants', $clothing, $user_id));
  array_push($clothing, randomize_clothes('shoes', $clothing, $user_id));


  /* Saving the directories to display in cupboard.php */
  for($i = 0; $i< count($clothing);$i++){
    array_push($directories, $clothing[$i]->directory);
  }
  $login_db = null;

  /* Sending back the directories of randomized clothes */
  echo json_encode($directories);


  function randomize_clothes ($clothing_type, $clothing, $user_id) {
    include 'db_connect.php';


    /* Randomizing the correct piece of clothing from the database */
    $login_clothes_id = "select * from userclothes where clothinguser='$user_id' and clothingtype = '$clothing_type' order by rand() limit 1";
    
    $login_clothes = $login_db->query($login_clothes_id);
  
    $row_db = $login_clothes->fetch(PDO::FETCH_ASSOC);

    return new Pc_of_clothing($row_db['clothingtype'], $row_db['clothingcolor'], $row_db['clothingid'], $row_db['clothingimg']);
  }
  ?>