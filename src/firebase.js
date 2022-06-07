import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCxFCZRWWh6TmxODdO7IptHKKQvdgmeT38",
	authDomain: "tiktok-clone-b808a.firebaseapp.com",
	projectId: "tiktok-clone-b808a",
	storageBucket: "tiktok-clone-b808a.appspot.com",
	messagingSenderId: "704160789859",
	appId: "1:704160789859:web:914fe9ca12c347f324cf56",
	measurementId: "G-3RWSEMYD85",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
