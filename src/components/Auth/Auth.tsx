import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, googleAuthProvider } from '../../firebase';
import styles from './Auth.module.css'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import { setUserDisplayName } from "../../redux/user/user.slice";

export const AuthProvider = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const displayName = useSelector((state: RootState) => state.user.displayName);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        dispatch(setUserDisplayName(maybeUser.displayName));
      }
    });
    return unsub;
  }, [auth, dispatch]);

  const handleSignInWithGoogle = async () => {
    try {
      setIsButtonClicked(true);
      const credentials = await signInWithPopup(auth, googleAuthProvider)
      dispatch(setUserDisplayName(credentials.user.displayName));
    } catch (e) {
      console.log(e);

    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      dispatch(setUserDisplayName(null));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      {!displayName && !isButtonClicked && (
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      )}
      {displayName ? (
        <div className={styles.user}>
          <p>{displayName}</p>
          <button className={styles.btn} onClick={handleSignOut}>Sign out</button> {/* Кнопка для выхода из аккаунта */}
        </div>
      ) : isButtonClicked ? (
        <p>Loading...</p>
      ) : null}
    </div>
  );
};
