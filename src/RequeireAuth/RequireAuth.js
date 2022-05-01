// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.local.SECRET_APP_KEY,
	authDomain: process.env.local.AUTH_DOMAIN,
	projectId: process.env.local.PROJECT_ID,
	storageBucket: process.env.local.STORAGE_BUCKET,
	messagingSenderId: process.env.local.MESSAGING_SENDER_ID,
	appId: process.env.local.APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
