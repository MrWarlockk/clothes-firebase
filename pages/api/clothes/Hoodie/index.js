/*
session_start();

// If logged in go to the login page

import jwt from 'jsonwebtoken';
import db_connect from  '../Z_Requirements/db_connect';
import Pc_of_clothing from '../Z_Requirements/classes';
import React from 'react';
import Cookies from 'js-cookie';


function ReadHoodies(){
const secret_key = "secret";

let jwt_token = null;
// Change login, register, logout to js and make a cookie, somehow retain the value so it's read here (prolly just works 4HEad)

if(Cookies.get(jwt) !== undefined){
  const jwt_token = Cookies.get(jwt);
}

if(!jwt_token)
{
  let response = {message:"Session expired"};
  console.log(response);
  return;
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

$clothing_type = "hoodie";

// Array that stores all the values of the fetched clothes 
$clothing = array();

$login_clothes_get_id = "select * from users where userlogin='$username'";
$login_clothes2 = $login_db->query($login_clothes_get_id);
$row_db = $login_clothes2->fetch(PDO::FETCH_ASSOC);
$user_id = $row_db['userid'];
$login_clothes_id = "select * from userclothes where clothinguser='$user_id' and clothingtype = '$clothing_type'";

$login_clothes = $login_db->query($login_clothes_id);

// Pushing the values from the database to the clothing array 
while($row_db = $login_clothes->fetch(PDO::FETCH_ASSOC)){
  array_push($clothing, new Pc_of_clothing($row_db['clothingtype'], $row_db['clothingcolor'], $row_db['clothingid'], $row_db['clothingimg']));
}

$directories = array();

// Saving the directories to display in cupboard.php 
for($i = 0; $i< count($clothing);$i++){
  array_push($directories, $clothing[$i]->directory);
}
$login_db = null;

// Sending back the directories of hoodies 

echo json_encode($directories);

}*/

import initFirebase from "@component/firebase/initfirebase";
import { readUserData } from "@component/firebase/firebasedb";

/*
export default async function GetHoodies(){
  initFirebase();
  try{
  const db = getDatabase();
  const username = ref(db, "users/" + userId + "/username");
  const snapshot = await get(username);

  if (snapshot.exists()){
    const data = snapshot.val();
  }
}
catch (error){

  }
}
*/
