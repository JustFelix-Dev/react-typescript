type ButtonProp = {
    variant: 'primary' | 'secondary';
}

const Button = ({variant}:ButtonProp) =>{
    return ( 
          <>
            <button>Label</button>
          </>
     );
}
 
export default Button;