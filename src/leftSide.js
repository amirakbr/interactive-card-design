import Frontside from './cardFrontSide' ; 
import Backside from './cardBackSide';
const LeftSide = (props) => {
     return (
          <div className="md:h-[100vh] relative lg:flex lg:items-center h-[17rem] md:h-[auto] sm:relative w-full bg-mobile bg-no-repeat bg-cover bg-center">
               <div className="relative flex flex-col lg:flex-col-reverse w-full md:w-[auto] p-4 gap-4 justify-between md:mt-[5rem] lg:mt-[5rem] lg:items-end lg:-right-[10rem] lg:absolute lg:justify-center">
                    <Backside />
                    <Frontside get={props.fun} />
               </div>
          </div>
     )
}
export default LeftSide ; 