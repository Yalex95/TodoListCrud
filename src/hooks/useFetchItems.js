
import { useEffect ,useState} from "react";
import { getItems } from "../helpers/getItems";

 export const useFetchItems=(items)=> {
    const [state, setState] = useState({
        data:[],
        loading: true
    });
    
   useEffect(()=>{
        getItems(items).then(
            dato=>setState({
        data:dato,
        loading:false
        }))
   },[items])
   return state; 
}