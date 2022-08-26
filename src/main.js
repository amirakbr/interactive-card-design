import LeftSide from './leftSide';
import FormWrapper from './FormWrapper';
const Main = (props) => {
     return (
          <main className='flex flex-col relative md:grid md:grid-cols-1fr2fr min-h-[100vh]' >
               <LeftSide fun={props.change} />
               <FormWrapper sefun={props.onchange} fun={props.change} />
          </main>
     )
}
export default Main ; 