import React, {  useState } from 'react'
export const TodoAdd = ({setItems}) => {
    //TODO, reload the page after adding an todo item
    
    const [tarea, setTarea] = useState('');

    const handleInputChange = (event) => {
         setTarea(event.target.value);
    
    }
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        //validacion 
        if(tarea.trim().length <= 1){
            return;
        }
        fetch('https://todolist-10123-default-rtdb.firebaseio.com/todoList.json', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: new Date().getTime(),
              complete: false,
              tarea:tarea
            })
          })
          .then(res => {
            if(res.status ===200){
              console.log("ok")
              res.json(
              setItems(item=>
                [...item,res.name]
                ))
            }
           })
          .then(data => {
            setTarea('')
          })
      }
  return <>
    <h1>Add Todo</h1>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input value={tarea} 
            type="text"onChange={handleInputChange}
             className="form-control"
             name='tarea'
              id="todo" placeholder="Enter Todo"/>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
    </form>
  </>
}
