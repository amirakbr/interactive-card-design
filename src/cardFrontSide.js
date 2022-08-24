const FrontSide = () => {
     return (
          <div className="flex flex-col gap-[2rem] h-[14rem] px-4 py-6 justify-between bg-gray-100 rounded-1rem max-w-[24rem] -mt-[6rem] lg:mt-[0] z-[1] bg-frontsidecard bg-cover bg-center bg-no-repeat lg:w-full lg:mr-[4rem]">
               <div className="flex items-center gap-6">
                   <div className="w-3 h-3 bg-white rounded-full">

                   </div>
                   <div className="w-2 h-2 bg-transparent border-[.1rem] border-[white] rounded-full">

                   </div>
               </div>
               <div className="flex flex-col gap-[1rem] text-white">
                    <p className="text-[1.5rem] text-center">
                         0000 0000 0000 0000
                    </p>
                    <div className="flex justify-between text-[1.2rem]">
                         <p>
                              Jane Blog
                         </p>
                         <p>
                              04/05
                         </p>
                    </div>
               </div>
          </div>
     )
}


export default FrontSide ; 