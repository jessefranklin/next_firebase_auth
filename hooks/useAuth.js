import {
  useState,
  useEffect,
  useContext,
  createContext,
 } from 'react';
 import { auth, db, provider, google_provider } from 'config/firebase';
 import { useRouter } from 'next/router'

 const authContext = createContext({ user: {} });
 const { Provider } = authContext;
 export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{children}</Provider>;
 }
 export const useAuth = () => {
  return useContext(authContext);
 };

 

const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const handleAuthStateChanged = (user) => {
    setUser(user);
    if (user) {
     getUserAdditionalData(user);
    }
   };
   useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);
    
    return () => unsub();
   }, []);
   useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));
    return () => unsubscribe();
    }
  }, []);
  const getUserAdditionalData = (user) => {
    return db
     .collection('users')
     .doc(user.uid)
     .get()
     .then((userData) => {
      if (userData.data()) {
       setUser(userData.data());
      }
    });
  };

  const createUser = (user) => {
    return db
    .collection('users')
    .doc(user.uid)
    .set(user)
    .then(() => {
      setUser(user);
      return user;
    })
    .catch((error) => {
      return { error };
    });
  };
  const signIn = ({ email, password }) => {
    return auth
     .signInWithEmailAndPassword(email, password)
     .then((response) => {
      setUser(response.user);
      getUserAdditionalData(user);
      return response.user;
     })
     .catch((error) => {
      return { error };
     });
  };
  const signUp = ({ name, email, password }) => {
    return auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      auth.currentUser.sendEmailVerification();
      return createUser({ uid: response.user.uid, email, name });
    })
    .catch((error) => {
      return { error };
    });
  };
  const signOut = () => {
    return auth.signOut().then(() => {
      setUser(false)
      router.push('/');
    });
  };
  const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email).then((response) => {
     return response;
    });
   };
  const signInFB = () => {
    auth.signInWithPopup(provider).then(function(result) {
      setUser(result.user);
      getUserAdditionalData(user);
      router.push('/dashboard');
      console.log(result.user, result.credential.accessTokens)
      var token = result.credential.accessToken;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
  const signInGoogle = () => {
    auth.signInWithPopup(provider).then(function(result) {
      setUser(result.user);
      getUserAdditionalData(user);
      router.push('/dashboard');
      var token = result.credential.accessToken;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
  
  return {
    user,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    signInFB,
    signInGoogle
  };
};