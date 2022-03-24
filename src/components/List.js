import React, { useEffect} from 'react'
import { useFetchItems } from '../hooks/useFetchItems'
import ListItems from './ListItems'

 const List = ({items,handleDelete,setItems}) => {
 
     //custom hook usefetchItems
     const {data,loading}=useFetchItems(items);

    useEffect(() => {
      setItems(data);
    }, []);
    

  return <>
  <h1>Todo List</h1>
  <ul className="list-group list-group-flush">
           { loading? 'cargando..':''}
           {
           (data.length===0 && !loading && data===null && data==='nulo')?'No hay Todos':
            data.map(item=>(
                <ListItems
                handleDelete={handleDelete}
                key={item.idDB}
                {...item}/>
            ))}
  </ul>
  </>
  
}

export default List;