// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCBsmWhNTW_h9ZzA3_qfcw88ExwMbrcXq8",
	authDomain: "laptop-maniya.firebaseapp.com",
	projectId: "laptop-maniya",
	storageBucket: "laptop-maniya.appspot.com",
	messagingSenderId: "997270790774",
	appId: "1:997270790774:web:8f9174c777dc4fafbf7557",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
