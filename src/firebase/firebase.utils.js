import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBUEMBBiKM5cOZG0nrgH9NUrN09so3DDXk",
    authDomain: "ecom-app-f2243.firebaseapp.com",
    databaseURL: "https://ecom-app-f2243.firebaseio.com",
    projectId: "ecom-app-f2243",
    storageBucket: "",
    messagingSenderId: "814753505228",
    appId: "1:814753505228:web:96ba33d648b51c9a"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

const github_provider = new firebase.auth.GithubAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGitHub = () => auth.signInWithPopup(github_provider)

export default firebase