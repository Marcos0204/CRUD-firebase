import React, { useState } from 'react';
import Home from './components/Home';
import Logueo from './components/Logueo';

const App = () => {

  const [ userGlobal, setUserGlobal ] = useState(null);

  return (
    <div>
      {userGlobal ? <Home/> : <Logueo/>}
    </div>
  )
}

export default App
