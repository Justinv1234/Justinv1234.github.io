import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "personal-website-aa.firebaseapp.com",
  projectId: "personal-website-aa",
  storageBucket: "personal-website-aa.firebasestorage.app",
  messagingSenderId: "637761537775",
  appId: "1:637761537775:web:48121be2ac2dbfb3a63d1a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function UploadContact(
  name: string,
  email: string,
  message: string
): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
