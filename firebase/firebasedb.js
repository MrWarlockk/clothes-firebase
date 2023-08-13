import { getDatabase, ref, set, onValue } from "firebase/database";

export function writeUserData(id, username, email, imageUrl) {
  try {
    const db = getDatabase();
    set(ref(db, "users/" + id), {
      id: id,
      username: username,
      email: email,
      profile_picture: imageUrl,
    });
    console.log("Values put into the db correctly");
  } catch (error) {
    console.error("Error during writing into db");
  }
}

export function readUserData(userId) {
  const db = getDatabase();
  const username = ref(db, "users/" + userId + "/username");
  onValue(username, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}
