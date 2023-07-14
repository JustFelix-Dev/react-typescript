type buttonProps = {
    handleClick: (e: React.MouseEvent)=> void
}
const Button = ({handleClick}:buttonProps) => {
    return ( 
            <>
            <button onClick={handleClick}>Click Here!</button>
            </>
     );
}
 
export default Button;