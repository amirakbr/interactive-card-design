import { getAllByText } from "@testing-library/react";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const FormWrapper =(props) => {
     return (
          <div className="flex flex-col gap-[1rem] mt-[8rem] lg:ml-[15rem] px-[10%] lg:pl-[0%] lg:pr-[20%] lg:justify-center lg:ml-[14rem] mb-[2rem] max-w-[1000px]">
               <label className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                    CARDHOLDER NAME
                    <input onChange={()=>{props.sefun(document.querySelector(".username").value)}} type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none username" maxLength='15' placeholder="e.g. Jabe Applesed" value={props.fun?props.fun:"e.g. Jabe Applesed"} />
               </label>
               <label className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                    CARD NUMBER
                    <input type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none" maxLength='15' placeholder="e.g. 1234 5678 9123 0000" />
               </label>
               <div className="grid xsm:grid-cols-1fr1fr gap-[1rem]">
                    <div className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                         <label>
                              Date
                         </label>
                         <div className="grid grid-cols-1fr1fr gap-[.5rem]">
                              <input type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none input" maxLength='19' placeholder="MM"  />
                              <input type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none" maxLength='2' placeholder="YY" />
                         </div>
                    </div>
                    <div className="flex flex-col">
                         <label className="flex flex-col gap-2 text-[1rem] font-bold items-center xsm:items-start">
                                   CVC
                              <input type='text' className="w-full border-[.15rem] rounded-[.5rem]  py-2 px-4 focus:border-[#6f00ff] focus:outline-none focus:ring-0 outline-none" maxLength='3' placeholder="e.g. 123" />
                         </label>  
                    </div>
               </div>
          </div>
     )
}
export default FormWrapper ; 