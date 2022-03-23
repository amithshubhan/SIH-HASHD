import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router} from 'react-router-dom'


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyChBkTawNDTxNnLo13KMsV79dD4eisaAX0",
//   authDomain: "sih-hashd.firebaseapp.com",
//   projectId: "sih-hashd",
//   storageBucket: "sih-hashd.appspot.com",
//   messagingSenderId: "488686909629",
//   appId: "1:488686909629:web:10d1f91e3c1cf3f6955fd4",
//   measurementId: "G-K2GJLJCJ71"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <Router className="App">
      <Home/>
    </Router>
  );
}

export default App;
