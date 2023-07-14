type childProps = {
    children: string
}

const Heading = ({children}:childProps) => {
    return ( 
             <>
              <span>Content- {children}</span>
             </>
     );
}
 
export default Heading;