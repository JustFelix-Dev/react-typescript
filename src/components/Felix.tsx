type FelixProps = {
    children: React.ReactNode,
}
const Felix = ({children}:FelixProps) => {
    return ( 
           <>
           <div>Nested - {children}</div>
           </>
     );
}
 
export default Felix;