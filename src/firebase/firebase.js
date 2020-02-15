import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDM8hKcsmHyFf05u0evixfQvdJHQCTtDAA",
    authDomain: "dexchange-3b39f.firebaseapp.com",
    databaseURL: "https://dexchange-3b39f.firebaseio.com",
    projectId: "dexchange-3b39f",
    storageBucket: "gs://dexchange-3b39f.appspot.com",
    messagingSenderId: "181221020627",
    appId: "1:181221020627:web:cc7b5779cf46886b3dd526"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}