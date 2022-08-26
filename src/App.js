import { useState } from 'react';
import Main from './main';

function App() {
  const [arr , setarr] = useState([]) ; 
  return (
    <Main change={arr} onchange={setarr} />
  );
}

export default App;
