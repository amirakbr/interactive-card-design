import Frontside from './Card/FrontSide/cardFrontSide' ; 
import Backside from './Card/BackSide/cardBackSide';
const LeftSide = (props) => {
     return (
          <div className="md:h-[100vh] relative lg:flex lg:items-center h-[17rem] md:h-[auto] sm:relative w-full bg-mobile bg-no-repeat bg-cover bg-center">
               <div className="relative flex flex-col lg:flex-col-reverse w-full md:w-[auto] p-4 gap-4 justify-between md:mt-[0] lg:mt-[0] lg:items-end lg:-right-[10rem] lg:absolute lg:justify-center">
                    <Backside cvv={props.cvv} 
                    isPassed={props.isPassed}
                    isConfirmed={props.isConfirmed} />
                    <Frontside get={props.fun} cardNum={props.cardNum} 
                    month={props.month} 
                    Year={props.Year} 
                    isPassed={props.isPassed}
                    isConfirmed={props.isConfirmed} />
               </div>
          </div>
     )
}
export default LeftSide ; 