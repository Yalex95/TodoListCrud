import React from 'react'

 const ListItems = ({tarea,complete,idDB,id,handleDelete}) => {
  
     const deleteItem =(id)=>{
        fetch(`https://todolist-10123-default-rtdb.firebaseio.com/todoList/${id}.json`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json(
          
          ))
          .then(data => {
            if(data===null||data==="null"){

              handleDelete(id)
            }
          })
     }
     const updateComplete =(idDB,complete,id,tarea)=>{
        fetch(`https://todolist-10123-default-rtdb.firebaseio.com/todoList/${idDB}.json`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id,
                tarea:tarea,
              complete: complete
            })
          })
          .then(res => res.json(
            //refesh page
             window.location.reload()
          ))
          .then(data =>
             console.log(data)
          )

     }
  return <>
  <li className="list-group-item">
    <p className={complete? "complete":"" }>{tarea}</p>
    <button  className={complete? "d-none btn btn-succes":"btn btn-success" } onClick={()=>updateComplete(idDB,!complete,id,tarea)}>Completado</button>
    <button  className='btn btn-danger' onClick={()=>deleteItem(idDB)}>Eliminar</button>
  </li>
  </>
}
export default ListItems;
