// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbi3SRniOs71T6iGBjxtyGeiRBeiBF-24",
    authDomain: "project-71725.firebaseapp.com",
    databaseURL: "https://project-71725-default-rtdb.firebaseio.com",
    projectId: "project-71725",
    storageBucket: "project-71725.appspot.com",
    messagingSenderId: "1013647957741",
    appId: "1:1013647957741:web:89045bc9702ee80525f6e4",
    measurementId: "G-7R1R0JXQEL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();

// Create a reference to the root of your database
var rootRef = database.ref();
