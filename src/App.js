import React, { useState } from 'react';
import Home from './components/Home';
import Logueo from './components/Logueo';
import firebaseApp from './Credentials';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

const auth = getAuth(firebaseApp);

const App = () => {

  const [ userGlobal, setUserGlobal ] = useState(null);


  //funcion que se ejecutar al detectar autentificacion
  onAuthStateChanged(auth, (userAuth) =>{
    if(userAuth){
      setUserGlobal(userAuth);
    } else {
      setUserGlobal(null);
    }
  })

  return (
    <div>
      {userGlobal ? <Home email={userGlobal.email}/> : <Logueo/>}
    </div>
  )
}

export default App
