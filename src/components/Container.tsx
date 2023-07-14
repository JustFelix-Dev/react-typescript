import { containerProp } from "./Types";


const Container = ({styles}:containerProp) => {
    return ( 
          <>
            <div style={styles}>
                Text Content Goes Here
            </div>
          </>
     );
}
 
export default Container;