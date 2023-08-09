import { createConnection } from "mysql2";

const host = "localhost";
const db_user = "root";
const db_password = "";
const db_name = "clothes";

async function db_connect() {
  try {
    const connection = await createConnection({
      host: host,
      user: db_user,
      password: db_password,
      database: db_name,
    });
    return connection;
  } catch (error) {
    console.log("Error while connecting to the database", error);
    throw error;
  }
}

export default db_connect;
