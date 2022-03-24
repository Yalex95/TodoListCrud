/**
 * peticion al api de firebase real time database
 */
 export const getItems=async()=>{
    const url=`https://todolist-10123-default-rtdb.firebaseio.com/todoList.json`

    const resp= await fetch(url)
  
    const data = await resp.json();
    //array de objetos
    const arrayOfObjects=Object.entries(data);
    
     const items= arrayOfObjects.map(e=>{
    //agrega el auto id que genera firebase a el array
       e[1].idDB=e[0];
         return(
          e[1]
         )
     })

     return items;
}