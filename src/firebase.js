import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDe1zYz8kTKm-0nNeYHsPFjO3WQtYwfpvg",
	authDomain: "clone-48bb9.firebaseapp.com",
	projectId: "clone-48bb9",
	storageBucket: "clone-48bb9.appspot.com",
	messagingSenderId: "534134069946",
	appId: "1:534134069946:web:9f139146093ee157f28083",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
