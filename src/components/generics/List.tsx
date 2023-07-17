type Listprops<T> = {
    items: T[];
    onClick: (value:T)=> void;
}

const List= <T extends number|string>({items,onClick}:Listprops<T>) => {
    return ( 
            <>
              <div>
                  <h2>List of Items</h2>
                  { items.map((item,index)=>{
                       return (
                         <div key={index} onClick={()=>onClick(item)}>{item}</div>
                 )
                  })
                  }
              </div>
            </>
             );
}
 
export default List;