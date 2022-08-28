import { useState } from 'react';
import Main from './main';

function App() {
  const [arr , setarr] = useState(' ') ; 
  const [cardNum , setCardNum] = useState(' ')
  const [month , setMonth] = useState('00') ; 
  const [Year , setYear] = useState('00') ; 
  const [cvv , setcvv] = useState('000') ; 
  return (
    <Main change={arr} onchange={setarr} 
    cardNum={cardNum} setCardNum={setCardNum} 
    month={month} setMonth={setMonth} 
    Year={Year} setYear={setYear}
    cvv={cvv} setcvv={setcvv} />
  );
}

export default App;
