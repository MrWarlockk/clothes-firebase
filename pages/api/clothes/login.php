<?php
// session to retain values between files
session_start(); 
// db_connect.php has values of the server
require_once "Z_requirements/db_connect.php";
require_once 'Z_requirements/classes.php';
require_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;

// If connection to the server has been established
$login = $_POST['username'];
$password = $_POST['password'];

$returns = array();


// Selecting the correct user from the database (username/password match)
$login_credentials = "select * from users where userlogin='$login'";

$login_result = $login_db->query($login_credentials);
$row_count = $login_result->rowcount();

// Username and password do not match
if($row_count != 1)
{
    $login_db = null;
    $returns['status'] = false;
    $returns['message'] = "Wrong username or password";
    echo json_encode($returns);
    exit();
}

// Could access  the database and read the values
// Getting the clothes assigned to that user from the database
$row_db = $login_result->fetch(PDO::FETCH_ASSOC);

if(password_verify($password, $row_db['userpassword']))
{
    $user_id_temp = $row_db['userid'];
    $login_db = null;
    $returns['status'] = true;
    $returns['message'] = "Correct log in information";
    $returns['user_id'] = 1;

    $payload=[
        
        'iss'=>'localhost',
        'aud'=>'localhost',
        'exp'=>time()+(60*10),
        
        'name'=> $login
    ];
    $secret_key="secret";
    $jwt = JWT::encode($payload,$secret_key, 'HS256');

    setcookie('jwt', $jwt, time()+(60*10), '/');
    echo json_encode($returns);
}
else
{
    $login_db = null;
    $returns['status'] = false;
    $returns['message'] = "Wrong username or password";
    echo json_encode($returns);
}
?>
