import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export default function HomePage() {
  let defaultTodos = 
  [
    {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
    {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true}, 
    {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true}, 

  ]
    const [todo, setTodos] = useState (defaultTodos)
    const [initialTodos, setInitialTodos] = useState (defaultTodos)

    let handleAllTodos = () => {
      setTodos (initialTodos)
    }

    let handleCompletedTodos = () => {
      let completedTodos = todo.filter ((todo)=> todo.isCompleted===true)
      setTodos (completedTodos)
      let newTodo = todo.filter ((todo, TodoIndex)=> {
      })
    }

    let handleUncompletedTodos = () => {
      let uncompletedTodos = todo.filter ((todo)=> todo.isCompleted===false)
      setTodos (uncompletedTodos)
    }

let handleDelete = (event, rowindex) => {
  console.log (event)
  console.log (rowindex)
  let newTodo = todo.filter ((todo, TodoIndex)=> {
    if (rowindex!==TodoIndex) return todo 
  })
  setTodos (newTodo)
}
  return (
    <>
        <h1></h1>
        <Button variant="dark" onClick={()=>handleAllTodos()}>All Todos</Button>
        <Button variant="dark" onClick={()=>handleCompletedTodos()}>Completed</Button>
        <Button variant="dark" onClick={()=>handleUncompletedTodos()}>Uncompleted</Button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Todo Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        todo.map ((todo, index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{todo.todo_text}</td>
          <td>{todo.todo_date}</td>
          <td>{todo.isCompleted ? "YES" : "NO" }</td>
          <td> <Button variant="danger" onClick={(event)=>handleDelete(event,index)}>Delete</Button></td>

        </tr>
        ))
      }
      </tbody>
    </Table>
    </>
  )
}
