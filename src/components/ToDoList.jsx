import React, { useState } from 'react'

const ToDoList = () => {

  const[todo,setToDo]  = useState("")
  const[listData, setlistData] = useState([])
  const handleChange = (e) => {
        setToDo(e.target.value)
        
  }
  const handleClick = () => {
        setlistData((listData) => {
          const updatedList = [...listData,todo]
          console.log(updatedList)
          setToDo("")
          return updatedList
        })
       
  }

  const handleDelete = () => {
      setlistData([])
  }
  const remove =(index) => {
    const updatedListData = listData.filter((elem, id) => {
      return index!== id;

    }) 
    setlistData(updatedListData)

  }
  return (
    <>

       <div className='container'>
       <div className='Header'><b><h1>ToDo List </h1> </b> </div>
       <input type="text" placeholder="Enter ToDo" value={todo} onChange={handleChange} />
<br />
<button className = "todoButton" onClick={handleClick}><b>Add ToDo</b></button>
<p className='list-heading'>Here are your ToDos {"):"}</p>

{
  listData !== [] && listData.map((data,index) => {
  return (
    <>
    <p key={index}>
      <div  className="listData">
      {data}</div>
      <br></br>
      <div  >

        <button className='btn-remove' onClick={() => remove(index)}><b>Remove</b></button>
      </div>
      </p>
    </>
)})
}
{listData.length>=1 && 
<button className='delete' onClick={handleDelete}>Delete</button>}
       </div>


    </>
  )
}

export default ToDoList