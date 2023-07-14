type inputProps = {
    value: string,
    handleChange: (e:React.ChangeEvent)=> void
}

const Input = ({handleChange,value}:inputProps)=>{
    return ( 
            <>
              <input type="text"  value={value} onChange={handleChange}/>
            </>
          );
}
 
export default Input;