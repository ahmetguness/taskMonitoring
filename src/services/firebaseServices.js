import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Authenticate User Function
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
        if (userData.createdAt instanceof Timestamp) {
          const createdAtDate = userData.createdAt.toDate();
          userData.createdAt = `${createdAtDate.getDate()}/${
            createdAtDate.getMonth() + 1
          }/${createdAtDate.getFullYear()}`;
        }
      }
    });

    return { isValid: isUserValid, userInfo: { id: userId, ...userData } };
  } catch (error) {
    console.error("Error during authentication:", error);
    return { isValid: false, userInfo: null };
  }
}

// Register User Function
export async function registerUser(userKind, userName, password) {
  try {
    const userRef = collection(db, userKind);
    const q = query(userRef, where(`${userKind}UserName`, "==", userName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { isSuccess: false, errorMessage: "Username already exists" };
    }

    const newUser = {
      [`${userKind}UserName`]: userName,
      [`${userKind}Password`]: password,
      createdAt: serverTimestamp(),
    };

    const userDocRef = await addDoc(userRef, newUser);

    const createdUser = await getDoc(userDocRef);
    const userData = createdUser.data();

    const createdAt =
      userData.createdAt instanceof Timestamp
        ? userData.createdAt.toDate()
        : null;

    const formattedCreatedAt = createdAt
      ? `${createdAt.getDate()}/${
          createdAt.getMonth() + 1
        }/${createdAt.getFullYear()}`
      : null;

    return {
      isSuccess: true,
      userInfo: {
        id: userDocRef.id,
        ...userData,
        createdAt: formattedCreatedAt,
      },
    };
  } catch (error) {
    console.error("Error during registration:", error);
    return { isSuccess: false, errorMessage: error.message };
  }
}
