    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'
    import 'firebase/analytics'
    
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAsRXcUR_VLJCMn96AmBUkI-z-pw1joKSc",
        authDomain: "kasasapp-4cbc5.firebaseapp.com",
        databaseURL: "https://kasasapp-4cbc5.firebaseio.com",
        projectId: "kasasapp-4cbc5",
        storageBucket: "kasasapp-4cbc5.appspot.com",
        messagingSenderId: "27957987620",
        appId: "1:27957987620:web:3a1a2aaac1909e2609cbb1",
        measurementId: "G-5GD85307F1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    //firebase.firestore().settings({ timestampsInSnapshots: true });

    export default firebase;
