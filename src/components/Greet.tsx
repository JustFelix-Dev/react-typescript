type greetProps = {
    name:string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = ({name,messageCount=0,isLoggedIn}: greetProps) => {
    return ( 
          <>
              <div className="">
                { isLoggedIn ?
                    <>
                    <h2>You are welcome {name}!</h2>
                    <h3>You have {messageCount} unread messages!</h3>
                    </>
                : 'Welcome Guest'} 
                </div>
          </>
     );
}
 
export default Greet;
