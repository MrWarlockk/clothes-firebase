import { getStorage, ref, getDownloadURL } from "firebase/storage";
import initFirebase from "@component/firebase/initfirebase";
import { useEffect, useState } from "react";

export default function ImageDisplay() {
  const [downloadURL, setDownloadURL] = useState("");

  useEffect(() => {
    async function loadImageFromFirebase() {
      try {
        initFirebase();
        const storage = getStorage();
        const pathRef = ref(storage, "20230428_134504.jpg");
        const url = await getDownloadURL(pathRef);
        setDownloadURL(url);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    }

    loadImageFromFirebase();
  }, []);

  return (
    <div>
      <h1>Image from Firebase Storage</h1>
      <img id="imageElement" src={downloadURL} alt="Firebase Image" />
    </div>
  );
}
