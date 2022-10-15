function handleReset() {
     props.sefun(' ') ; 
     props.setCardNum(' ') ; 
     props.setMonth('00') ; 
     props.setYear('00') ; 
     props.setcvv('000') ; 
     let inputs = document.querySelectorAll('input') ; 
     inputs[0].value = '' ; 
     inputs[1].value = '' ; 
     inputs[2].value = '' ; 
     inputs[3].value = '' ; 
     inputs[4].value = '' ; 
     props.setIsConfirmed(0) ; 
}
export default handleReset ; 