import Frontside from './cardFrontSide' ; 
import Backside from './cardBackSide';
const LeftSide = () => {
     return (
          <div className="md:h-[100vh] absolute h-[17rem] md:h-[auto] sm:relative w-full bg-mobile bg-no-repeat bg-cover bg-center">
               <div className="relative flex flex-col lg:flex-col-reverse w-full md:w-[auto] p-4 gap-4 justify-between md:mt-[5rem] lg:mt-[10rem] lg:items-end lg:-right-[10rem]">
                    <Backside />
                    <Frontside />
               </div>
          </div>
     )
}
export default LeftSide ; 