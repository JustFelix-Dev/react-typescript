type myDetails =  {
  details : {
    firstName: string,
    lastName: string
  }
}

const Person = ({details}:myDetails) => {
    return ( 
           <>
           <h1>{details.firstName}{details.lastName}</h1>
           </>
     );
}
 
export default Person;