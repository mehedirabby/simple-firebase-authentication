
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from './FireBas/fireBase.init';

const auth = getAuth(app)


function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = ()=>{
    signInWithPopup(auth,provider)
    .then(result=>{

    })
    .catch(error=>{
      console.log('error: ',error)
    })
   }
  return (
    <div className="App"> 

    <button onClick={handleGoogleSignIn}>Google Sign in</button>
      
    </div>
  );
}

export default App;
