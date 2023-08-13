/*
import db_connect from  '../Z_Requirements/db_connect';
import jwt from 'jsonwebtoken';
let returns = [];

  // If connection to the server has been established
if(isset($_POST['email_reg']))
{
  $username_reg = $_POST['username_reg'];
  $email_reg = $_POST['email_reg'];
  $password_reg = $_POST['password_reg'];
  $password_reg2 = $_POST['password_reg2'];
  $success_reg = true;
  $wrong_email = false;

  $check_login = "select userlogin from users where userlogin='$username_reg'";
  $check_login_db = $login_db->query($check_login);
  if($check_login_db->rowcount() > 0)
  {
    $returns['status'] = false;
    $returns['message'] = "Username taken";
    $success_reg = false;
    $login_db = null;
  }
  if(ctype_alnum($username_reg) == false)
  {
    $returns['status'] = false;
    $returns['message'] = "Username contains something else than letters and numbers";
    $success_reg = false;
  }
  if((strlen($username_reg)<3 || strlen($username_reg)>20))
  {
    $returns['status'] = false;
    $returns['message'] = "Username less than 3, more than 20 characters";
    $success_reg = false;
  }

  $emailtest = filter_var($email_reg, FILTER_SANITIZE_EMAIL);
  if($emailtest != $email_reg || (filter_var($emailtest, FILTER_VALIDATE_EMAIL) == false))
  {
    $returns['status'] = false;
    $returns['message'] = "Invalid email";
    $success_reg = false;
  } 
  if($password_reg != $password_reg2)
  {
    $returns['status'] = false;
    $returns['message'] = "Passwords don't match";
    $success_reg = false;
  }
  if(ctype_alnum($password_reg) == false)
  {
    $returns['status'] = false;
    $returns['message'] = "Password contains something else than letters and numbers";
    $success_reg = false;
  }
  if((strlen($password_reg)<8 || strlen($password_reg)>20))
  {
    $returns['status'] = false;
    $returns['message'] = "Password is less than 8, more than 20 characters";
    $success_reg = false;
  }

  

  if($success_reg){

    $password_hashed = password_hash($password_reg, PASSWORD_DEFAULT);
    $login_db->query("INSERT INTO users VALUES (NULL, '$username_reg', '$password_hashed')");
    $returns['status'] = true;
    $returns['message'] = "Registered successfully";
    $returns['user'] = array();
    $returns['user'][0] = $username_reg;
    $login_clothes = $login_db->query("select * from users where userlogin='$username_reg'");
    $row_db = $login_clothes->fetch(PDO::FETCH_ASSOC);
    $returns['user'][1] = $row_db['userid'];
    $login_db = null;

    $payload=['name'=> $username_reg];
    $secret_key="very secret";
    $jwt = JWT::encode($payload,$secret_key, 'HS256');

    $returns['data'][0] = $jwt;
  }
  }
  echo json_encode($returns);

*/
/*
import db_connect from "./Z_Requirements/db_connect";

export default async function Register(req, res) {
  const { email, password, password2 } = req.query;
  console.log(email);
  console.log(password);

  if (password !== password2) {
    res.status(200).json({ message: "Different passwords" });
  }

  try {
    const dbConnect = await db_connect();

    // Db operations, add xampp
    const [rows, fields] = await dbConnect.execute(
      "SELECT * FROM users WHERE userlogin = ?",
      [email]
    );
    console.log("Fetched rows:", rows);

    res.status(200).json({ message: "All good" });

    dbConnect.end();
  } catch (error) {
    console.error("Error during registration", error);
    res
      .status(500)
      .json({ message: "Error when trying to connect to the database" });
  }
}*/

/*
import db_connect from "./Z_Requirements/db_connect";

export default async function handler(req, res) {
  const dbConnect = await db_connect();

  try {
    const [data, fields] = await dbConnect.execute(
      "SELECT * FROM userclothes;"
    );
    console.log("Data:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data from the database" });
  }
}
*/

import initFirebase from "@component/firebase/initfirebase";
import { writeUserData } from "@component/firebase/initfirebase";
import {
  query,
  equalTo,
  get,
  getDatabase,
  orderByChild,
  ref,
} from "firebase/database";

export default async function Register({ username }) {
  initFirebase();
  //writeUserData(2, "m3ciej", "m3iej@gmail.com", null); //
  //readUserData(1);
  const db = getDatabase();
  const usersRef = ref(db, "users");
  const usernameQuery = query(
    usersRef,
    orderByChild("username"),
    equalTo(username)
  );
  const snapshot = await get(usernameQuery);
  console.log(snapshot.val());
}
