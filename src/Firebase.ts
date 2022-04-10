import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
	apiKey: 'AIzaSyBixwl5NOnmOkX7MzvO7zLYD8Jrg4eE3CI',
	authDomain: 'hip-projekt.firebaseapp.com',
	projectId: 'hip-projekt',
	storageBucket: 'hip-projekt.appspot.com',
	messagingSenderId: '971884278244',
	appId: '1:971884278244:web:216926776190ce96af57f1',
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

export default db;
