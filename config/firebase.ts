import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth"; // Import when needed
// import * as Google from "expo-auth-session/providers/google"; // Import when needed
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
// const provider = new GoogleAuthProvider(); // Uncomment when needed

const signIn = async () => {
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: "YOUR_ANDROID_CLIENT_ID",
  //   iosClientId: "YOUR_IOS_CLIENT_ID",
  // });

  // if (response?.type === "success") {
  //  
  // } else {
  //   promptAsync();
  // }
  
  // Note: This function should be implemented properly when Google Auth is configured
  console.log("Sign in function called - implement Google Auth configuration");
};

const logOut = async () => {
  await signOut(auth);
  // useAuthStore.getState().logout();
};

const useAuthListener = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_currentUser) => {
      // useAuthStore.getState().setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
};

export { auth, signIn, logOut, useAuthListener };
