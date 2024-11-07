import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "./firebaseConfig";

export async function authenticateUser(userKind, userName, password) {
  try {
    const userRef = collection(db, userKind);
    const q = query(userRef, where(userKind + "UserName", "==", userName));
    const querySnapshot = await getDocs(q);

    let isUserValid = false;
    let userData = null;
    let userId = null;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const passPropertyName = userKind + "Password";
      if (
        data.hasOwnProperty(passPropertyName) &&
        data[passPropertyName] === password
      ) {
        isUserValid = true;
        userData = data;
        userId = doc.id;
      }
    });

    return { isValid: isUserValid, userInfo: { id: userId, ...userData } };
  } catch (error) {
    console.error("Error during authentication:", error);
    return { isValid: false, userInfo: null };
  }
}
