// // import { initializeApp, getApps, getApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyARb5VZlqxcPJep7kPhSUr790-Zi7SX7J4",
// //   authDomain: "react-native-expo-996fb.firebaseapp.com",
// //   projectId: "react-native-expo-996fb",
// //   storageBucket: "react-native-expo-996fb.appspot.com",
// //   messagingSenderId: "885947122526",
// //   appId: "1:885947122526:web:2e1ff5ccb2deb53b14c5cf",
// //   measurementId: "G-EV34H6G7ZX"
// // };

// // // Initialize Firebase
// // let app;
// // if (getApps().length === 0) {
// //   app = initializeApp(firebaseConfig);
// // } else {
// //   app = getApp();
// // }

// // // Initialize Firebase Authentication and export it
// // const auth = getAuth(app);
// // export { auth };






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
// //   // const adminToken = import.meta.env.VITE_REACT_APP_API_KEY

// //   apiKey: "AIzaSyCcLoqnCDyCbIOqptv20KyYqwbpGvj_daw",
// //   // apiKey=import.meta.env.VITE_REACT_APP_API_KEY,
// //   // apiKey: process.env.REACT_APP_API_KEY,
// //   // authDomain: "netflixgpt-58cd6.firebaseapp.com",
// //   projectId: "netflixgpt-58cd6",
// //   storageBucket: "netflixgpt-58cd6.appspot.com",
// //   messagingSenderId: "190603771385",
// //   appId: "1:190603771385:web:c2d77784a197674e0ad128",
// //   measurementId: "G-YLDQFEKE0L"



//     apiKey: "AIzaSyARb5VZlqxcPJep7kPhSUr790-Zi7SX7J4",
//     authDomain: "react-native-expo-996fb.firebaseapp.com",
//     projectId: "react-native-expo-996fb",
//     storageBucket: "react-native-expo-996fb.appspot.com",
//     messagingSenderId: "885947122526",
//     appId: "1:885947122526:web:2e1ff5ccb2deb53b14c5cf",
//     measurementId: "G-EV34H6G7ZX"

// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // const db = getFirestore(app);
// // export{app};
// // export const auth = getAuth();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };












// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARb5VZlqxcPJep7kPhSUr790-Zi7SX7J4",
    authDomain: "react-native-expo-996fb.firebaseapp.com",
    projectId: "react-native-expo-996fb",
    storageBucket: "react-native-expo-996fb.appspot.com",
    messagingSenderId: "885947122526",
    appId: "1:885947122526:web:2e1ff5ccb2deb53b14c5cf",
    measurementId: "G-EV34H6G7ZX"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig); // Initialize if no apps are available
} else {
    app = getApp(); // Use the already initialized app
}

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the services to use in your app
export { auth, db };
