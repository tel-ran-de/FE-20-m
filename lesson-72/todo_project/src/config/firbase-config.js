import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyBrQM-Fm-v38hz6qkX4Ypbvf6Lcze_5DrE",
    authDomain: "personaltodo-2b4ad.firebaseapp.com",
    projectId: "personaltodo-2b4ad",
    storageBucket: "personaltodo-2b4ad.appspot.com",
    messagingSenderId: "43234792169",
    appId: "1:43234792169:web:b18b78047625a88c8ed678"
  };

export const fb = firebase.initializeApp(firebaseConfig);
export const fbAuth = firebase.auth()