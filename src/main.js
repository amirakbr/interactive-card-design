import LeftSide from './leftSide';
import FormWrapper from './FormWrapper';
const Main = () => {
     return (
          <main className='flex flex-col relative md:grid md:grid-cols-1fr2fr min-h-[100vh] gap-[2rem] '>
               <LeftSide />
               <FormWrapper />
          </main>
     )
}
export default Main ; 