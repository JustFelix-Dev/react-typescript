type Listprops<T> = {
    items: T[];
    onClick: (value:T)=> void;
}

const List= <T extends string|number >({items,onClick}:Listprops<T>) => {
    return ( 
            <>
              <div>
                  <h2>List of Items</h2>
                  { items.map((item,index)=>{
                    console.log(item)
                       return (
                         <div key={index} onClick={()=>onClick(item)}>
                            {item}
                         </div>
                 )
                  })
                  }
              </div>
            </>
             );
}
 
export default List;