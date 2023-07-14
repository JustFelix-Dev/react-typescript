// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Button from "./components/Button";
import Container from "./components/Container";
import Felix from "./components/Felix";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";

function App() {
  // const [count, setCount] = useState(0)
  const isPerson = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }
  const personList = [
       {
        first: 'Clark',
        last: 'Kent'
       },{
        first: 'Bruce',
        last: 'Wayne'
       },{
         first: 'Raymond',
         last: 'Yooshi'
       }
  ]
  const handleClick=(e:React.MouseEvent)=>{
    console.log('I am working fine!', e.target )
  }

  const handleChange=(e:React.ChangeEvent)=>{
    console.log("You changed the input", e.target);
  }
  return (
    <>
     <Greet name='Felix' messageCount={38} isLoggedIn={true}/>
     <Person details={isPerson}/>
     <PersonList list={personList}/>
     <Status status="error"/>
     <Heading>Your Placeholder here</Heading>
     <Felix>
      <Heading>Felix goes to Canada!</Heading>
     </Felix>
     <Button handleClick={handleClick}/>
     <Input value='' handleChange={handleChange}/>
     <Container styles={{border:'2px solid blue',padding:'1rem'}}/>

     {/* STATE */}
     <LoggedIn/>
     <User/>
     <Counter/>
     <ThemeContextProvider>
      <Box/>
     </ThemeContextProvider>
    </>
  )
}

export default App
