
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'


const config = {
    apiKey: "AIzaSyAdwbEw7UpVpjdghgRF6BfBc35mHpi9rWM",
    authDomain: "netflix-clone-942a7.firebaseapp.com",
    projectId: "netflix-clone-942a7",
    storageBucket: "netflix-clone-942a7.appspot.com",
    messagingSenderId: "135010719718",
    appId: "1:135010719718:web:03806d6f24b05dd410e827"
}


const firebase = Firebase.initializeApp(config);



export { firebase };