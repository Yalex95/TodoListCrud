import React, { useState } from 'react'
import List from './components/List';
import { TodoAdd } from './components/TodoAdd';
import './index.css';
export const TodoList = () => {
  
const [items, setItems] = useState([]);

const handleDelete=(id)=>{
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
}

    return <>
    <div className='container pt-5 '>
        <div className='row'>
            <div className='col-8' >
                <List 
                items={items} 
                setItems={setItems} 
                handleDelete={handleDelete}/>
            </div>
            <div className='col-4'>
                <TodoAdd setItems={setItems}/>
            </div>
        </div>
    </div>
   </>
  
}
export default TodoList;
