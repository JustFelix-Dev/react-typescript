type listedProps = {
    list:{
       first :string,
       last: string         
       }[]
}
const PersonList = ({list}:listedProps) => {

    return (  
           <>
            {
                list.map((item,idx)=>{
                      return(
                           <h5 key={idx}>{item.first} {item.last}</h5>
                       )
                })
            }
           </>
     );
}
 
export default PersonList;