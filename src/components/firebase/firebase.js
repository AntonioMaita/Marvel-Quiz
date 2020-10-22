import app from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

 const config = {
    apiKey: "AIzaSyAWWpNWbuisZvj6_Pzk6OAWA9fQQVyntrw",
    authDomain: "marvel-quiz-7287f.firebaseapp.com",
    databaseURL: "https://marvel-quiz-7287f.firebaseio.com",
    projectId: "marvel-quiz-7287f",
    storageBucket: "marvel-quiz-7287f.appspot.com",
    messagingSenderId: "815857866303",
    appId: "1:815857866303:web:696a765b0a6c0ac815ca8a"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

//inscription
    
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

//connexion
    
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

//deconnexion

    signoutUser = () => this.auth.signOut();


// Récupèrer le mot de passe

    passwordReset = email =>  this.auth.sendPasswordResetEmail(email);

    user = uid => this.db.doc(`users/${uid}`);
    

    

}



export default Firebase;