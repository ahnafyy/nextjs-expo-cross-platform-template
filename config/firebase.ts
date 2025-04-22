import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signIn = async () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
  });

  if (response?.type === "success") {
   
  } else {
    promptAsync();
  }
};

const logOut = async () => {
  await signOut(auth);
  // useAuthStore.getState().logout();
};

const useAuthListener = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // useAuthStore.getState().setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
};

export { auth, signIn, logOut, useAuthListener };
