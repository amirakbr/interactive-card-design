import LeftSide from './leftSide/leftSide';
import FormWrapper from './Form/FormWrapper';
import { useState } from 'react';
const Main = (props) => {
     const [isConfirmed , setIsConfirmed] = useState(0) 
     return (
          <main className='flex flex-col relative md:grid md:grid-cols-1fr2fr min-h-[100vh]' >
               <LeftSide fun={props.change} cardNum={props.cardNum}
               month={props.month} 
               Year={props.Year}
               cvv={props.cvv}
               isConfirmed={isConfirmed} />
               <FormWrapper sefun={props.onchange} fun={props.change} 
               cardNum={props.cardNum} setCardNum={props.setCardNum} 
               month={props.month} setMonth={props.setMonth} 
               Year={props.Year} setYear={props.setYear}
               cvv={props.cvv} setcvv={props.setcvv} 
               isConfirmed={isConfirmed} setIsConfirmed={setIsConfirmed} />
          </main>
     )
}
export default Main ; 