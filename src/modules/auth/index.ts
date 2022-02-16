import firebase from 'firebase/app';
import { auth, db } from '../../config/firebase';

export const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) =>
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        auth.signInWithPopup(provider)
            .then(
                async result => {
                    resolve(result)
                    const user = result.user;
                    const query = await db.collection("users").where("uid","==", user!.uid).get();
                    console.log(query,'query')
                    if (query.docs.length === 0) {
                        await db.collection("users").doc(`${user!.email}`).set({
                            uid: user!.uid,
                            name: user!.displayName,
                            authProvider: "google",
                            email: user!.email,
                        });
                       
                    }
                }
            )
            .catch(error => reject(error));
    });



export const signOut = () => {
    return firebase
        .auth()
        .signOut()
};