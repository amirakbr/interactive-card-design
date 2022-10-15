import { getAllByText } from "@testing-library/react";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import handleReset from "../utilities/handleReset";
const FormWrapper =(props) => { 
     return (
          <div className="flex flex-col gap-[1rem] mt-[8rem] lg:ml-[15rem] px-[10%] lg:pl-[0%] lg:pr-[20%] lg:justify-center lg:ml-[14rem] mb-[2rem] max-w-[1000px] lg:mt-[auto] lg:mb-[auto] ">
               <label style={{display : props.isConfirmed === 0 ? 'flex' : 'none'}} className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                    CARDHOLDER NAME
                    <input onChange={(event)=>{props.sefun(event.target.value)}} onKeyPress={(event) => {if (!/[aA-zZ , " "]/.test(event.key)) {event.preventDefault();}}} type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none username" maxLength='15' placeholder="e.g. Jabe Applesed"  required />
               </label>
               <label style={{display : props.isConfirmed === 0 ? 'flex' : 'none'}} className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                    CARD NUMBER
                    <input onChange={(event)=>{props.setCardNum(event.target.value)}} onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none cardnum" maxLength='16' placeholder="e.g. 1234 5678 9123 0000" required />
               </label>
               <div style={{display : props.isConfirmed === 0 ? 'grid' : 'none'}} className="grid xsm:grid-cols-1fr1fr gap-[1rem]">
                    <div className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                         <label>
                              Date
                         </label>
                         <div className="grid grid-cols-1fr1fr gap-[.5rem]">
                              <input onChange={(event) => {props.setYear(event.target.value)}} onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none" maxLength='2' placeholder="YY" required/>
                              <input onChange={(event) => {props.setMonth(event.target.value)}} onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none input" maxLength='2' placeholder="MM"  required/>
                         </div>
                    </div>
                    <div className="flex flex-col">
                         <label className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                                   CVC
                              <input onChange={(event) => {props.setcvv(event.target.value)}} onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none" maxLength='3' placeholder="e.g. 123" required/>
                         </label>  
                    </div>
               </div>
                    {props.isConfirmed === 0 
                         ? <button onClick={() => {props.fun.length >=1 
                         && props.cardNum.length === 16 
                         && props.month.length === 2 
                         && props.Year.length === 2 
                         && props.cvv.length === 3 
                         ? props.setIsConfirmed(1) 
                         : console.log('000')}} 
                         type="submit" 
                         className="w-full p-2 bg-gray-800 text-white text-[1.3rem] rounded-[.5rem] mt-[1rem] ">Confirm</button> 
                    : true }
                    <div style={{display : props.isConfirmed === 1 ? 'flex' : 'none'}} className="flex-col items-center gap-[1rem]" >
                         <div className="flex items-center justify-center w-[8rem] h-[8rem] p-[2rem] rounded-full bg-frontsidecard bg-[top]" >
                              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="120px" height="120px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
                         </div>
                         <h2 className="text-3xl font-medium">
                              THANK YOU!
                         </h2>
                         <p className="text-lg text-gray-500 font-semibold ">
                              We've added your card details
                         </p>
                         <button onClick={handleReset} type="submit" className="w-full p-2 bg-gray-800 text-white text-[1.3rem] rounded-[.5rem] mt-[1rem]">
                              Continue
                         </button>
                    </div>
          </div>
     )
}
export default FormWrapper ; 