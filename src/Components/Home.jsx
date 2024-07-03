
import React, { useState } from 'react'
import Task from './Task'

function Home() {
    const[title,setatitle]=useState("");
    const[description,setDescription]=useState("");
    const[tasks,setTasks]=useState([]);
    const submitHandler=(e)=>{
      e.preventDefault();
      setTasks([...tasks,{
        title,description
      }]);
    }
      const deleteTask=(index)=>{
        const filteredArr = tasks.filter((val,i)=>{
          return i!==index;
          console.log("papa");
        });
        setTasks(filteredArr);
        console.log("hi");
      
 };
  
  return (
    <div className='container'>
      <form  onSubmit={submitHandler} >
     <input type="text"  placeholder='Title'   value={title}
     onChange={(e)=>setatitle(e.target.value)}
    />
     <textarea  placeholdedr="Decription" 
     value={description}
     onChange={(e)=>setDescription(e.target.value)}
     ></textarea>
     <button   type='submit'>Add</button>
      </form>

      {tasks.map((item,index)=>(
        
        <Task  title={item.title} 
        description={item.description}
        deleteTask={deleteTask}
        index={index}
        />
      ))}
    </div>
  )
}

export default Home;
