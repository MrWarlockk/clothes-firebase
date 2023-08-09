<?php
session_start();

// If logged in go to the login page

require_once '../../vendor/autoload.php';
use \Firebase\JWT\JWT;
use Firebase\JWT\Key;
require_once "../Z_requirements/db_connect.php";
require_once '../Z_requirements/classes.php';
$payload=[
        
  'iss'=>'localhost',
  'aud'=>'localhost',
  'exp'=>time()+(60*10),
  
  'name'=> 'maciej',
];
$secret_key="secret";
$jwt = JWT::encode($payload,$secret_key, 'HS256');

setcookie('jwt', $jwt, time()+(60*10), '/');

/* Default response */
$response = array(
  'status' => 0,
  'message' => "A problem has occurred while uploading the image."
);


$jwt_token = null;
if (isset($_COOKIE['jwt'])) {
    $jwt_token = $_COOKIE['jwt'];
}

if(!$jwt_token)
{
  echo json_encode($response);
  $response['message']="Session expired";
    exit();
}

try {
    // Verify JWT token 
    $payload = JWT::decode($jwt_token, new Key($secret_key, 'HS256'));
} catch (Exception $e) {
    // JWT token is invalid
    echo json_encode($response);
    $response['message']="Session expired";
    exit();
}

$split_token = explode(".", $jwt_token);
$payload_decoded = json_decode(base64_decode($split_token[1]));
$username = $payload_decoded->name;


$login_clothes_get_id = "select * from users where userlogin='$username'";
$login_clothes2 = $login_db->query($login_clothes_get_id);
$row_db = $login_clothes2->fetch(PDO::FETCH_ASSOC);
$user_id = $row_db['userid'];

$available_colors = ['white','black','grey','yellow','red','blue','green','brown','pink','orange','purple'];

add($available_colors, "hoodie", $_POST['hoodie_color'], $_FILES['hoodie_file']['name'], $_FILES['hoodie_file']['tmp_name'], $_FILES['hoodie_file']['size'], $_FILES['hoodie_file']['error'], $_FILES['hoodie_file']['type'], $login_db, $user_id);

function add($available_colors, $clothing_type, $e_clothing_color, $filename, $filename_tmp, $file_size, $file_error, $filetype, $login_db, $user_id){
  // Processing the color put in by the user to lowercase
  $clothing_color =  strtolower($e_clothing_color);

  // Checking if the color is allowed
  if(in_array($clothing_color, $available_colors) == false)
  {
     $response['message'] = "Available colors are: white, black, grey, yellow, red, blue, green, brown, pink, orange, purple";
      $login_db = null;
      echo json_encode($response);
      exit();
  }

  // assigning values from the form
  $file_split = explode('.', $filename);
  $file_ext = strtolower(end($file_split));

  // Error when uploading the image
  if($file_error == true)
  {
    $response['message'] = "A problem has occurred while uploading the image.";
      $login_db = null;
      echo json_encode($response);
      exit();
  }
  // File size too big (5mB)
  if($file_size > 5000000)
  {
    $response['message'] = "The maximum file size is 5mb";
      $login_db = null;
      echo json_encode($response);
      exit();
  }
  // Extension incorrect
  if($file_ext != 'jpg' && $file_ext != 'jpeg' && $file_ext != 'png')
  {
    $response['message'] = "This file extension is not supported. Please use only jpg, jpeg or png files";
      $login_db = null;
      echo json_encode($response);
      exit();
  }

  // Giving the file a unique ID
  $filename_id = uniqid('', true);
  $filename_final = $filename_id.".".$file_ext;
  $file_destination = '../images/clothes_img/'.$filename_final;
  $file_destination_db = '../images/clothes_img/'.$filename_final;


  // Inserting the values into the database
  try
  {
    if(($login_db->query("INSERT INTO userclothes VALUES (NULL, '$clothing_color', '$clothing_type', '$user_id', '$file_destination_db')")) == false)
    throw new Exception('Could not access the database, try again later');
  }
  catch(Exception $e)
  {
    $response['message'] = $e.getMessage();
    $login_db = null;
    echo json_encode($response);
    exit();
  }
  $login_db = null;

  // Moving the file into the folder if there was a connection with the db
  move_uploaded_file($filename_tmp, $file_destination);

  $response['message'] = "File uploaded successfully";
  echo json_encode($response);
}
?>