import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import initFirebase from "@component/firebase/initfirebase";

export async function uploadImg() {
  initFirebase();
  const storage = getStorage();

  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(7);
  const fileName = `${timestamp}_${randomString}`;

  const imgRef = ref(storage, fileName);

  await uploadBytes(imgRef, file);

  const downloadURL = await getDownloadURL(imgRef);
  return downloadURL;
}
