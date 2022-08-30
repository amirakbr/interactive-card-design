const Backside=(props)=>{return(
     <div className="relative flex flex-col gap-[2rem] h-[14rem] justify-center rounded-1rem bg-gray-100 max-w-[24rem] self-end lg:self-auto lg:w-full">
          <img src="/images/bg-card-back.png" className="w-full h-full rounded-1rem" alt="Img"/>
          <p className="absolute text-2xl text-white right-[3rem] -mt-[.2rem]">
               {props.cvv !== " " && props.cvv !== "" ? `${props.cvv}` : `000` }
          </p>
     </div>
)}
export default Backside ; 