var firebaseConfig = {
    apiKey: "AIzaSyA0f70ZQA-6xWezJpLR9XptFWliRf5LJ6Q",
    authDomain: "to-do-live-99900.firebaseapp.com",
    projectId: "to-do-live-99900",
    storageBucket: "to-do-live-99900.appspot.com",
    messagingSenderId: "114782862491",
    appId: "1:114782862491:web:2b09ce06daa9bdbd1a9a3e",
    measurementId: "G-MD95LPWQTF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();