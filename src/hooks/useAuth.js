import { useEffect, useState } from 'react';

import { firebase, db } from '../firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log({ firebaseUser });

        const { displayName, email, photoURL, uid } = firebaseUser;
        const { providerId } = firebaseUser.providerData[0];

        setUser({ displayName, email, photoURL, providerId, uid });

        db.collection('users')
          .doc(uid)
          .set(
            { displayName, email, photoURL, providerId, uid },
            { merge: true }
          );
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return user;
};

export default useAuth;
